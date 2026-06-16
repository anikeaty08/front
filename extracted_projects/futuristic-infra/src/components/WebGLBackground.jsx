import React, { useEffect, useRef } from 'react';

const vertexShaderSource = `
  attribute vec2 position;
  void main(){gl_Position=vec4(position,0.0,1.0);}
`;

const fragmentShaderSource = `
  #ifdef GL_ES
  precision lowp float;
  #endif
  uniform vec2 uResolution;
  uniform float uTime; uniform float uHueShift; uniform float uNoise;
  uniform float uScan; uniform float uScanFreq; uniform float uWarp;
  vec4 buf[8]; float rand(vec2 c){return fract(sin(dot(c,vec2(12.9898,78.233)))*43758.5453);}
  mat3 rgb2yiq=mat3(0.299,0.587,0.114,0.596,-0.274,-0.322,0.211,-0.523,0.312);
  mat3 yiq2rgb=mat3(1.0,0.956,0.621,1.0,-0.272,-0.647,1.0,-1.106,1.703);
  vec3 hueShiftRGB(vec3 col,float deg){vec3 yiq=rgb2yiq*col;float rad=radians(deg);float cosh=cos(rad),sinh=sin(rad);vec3 yiqShift=vec3(yiq.x,yiq.y*cosh-yiq.z*sinh,yiq.y*sinh+yiq.z*cosh);return clamp(yiq2rgb*yiqShift,0.0,1.0);}
  vec4 sigmoid(vec4 x){return 1./(1.+exp(-x));}
  vec4 cppn(vec2 c,float i0,float i1,float i2){
      buf[6]=vec4(c.x,c.y,0.39+i0,0.36+i1); buf[7]=vec4(0.14+i2,length(c),0.,0.);
      buf[0]=sigmoid(mat4(6.5,-3.6,0.7,-1.1,2.4,3.1,1.2,0.06,-5.4,-6.1,1.8,-4.7,6.0,-5.5,-0.9,3.2)*buf[6]+mat4(0.8,-5.7,3.9,1.6,-0.2,0.5,-1.7,-5.3,0.,0.,0.,0.,0.,0.,0.,0.)*buf[7]+vec4(0.2,1.1,-1.7,5.0));
      buf[1]=sigmoid(mat4(-3.3,-6.0,0.5,-4.4,0.8,1.7,5.6,1.6,2.4,-3.5,1.7,6.3,3.3,8.2,1.1,-1.1)*buf[6]+mat4(5.2,-13.0,0.0,15.8,2.9,3.1,-0.8,-1.6,0.,0.,0.,0.,0.,0.,0.,0.)*buf[7]+vec4(-5.9,-6.5,-0.8,1.5));
      buf[2]=sigmoid(mat4(-15.2,8.0,-2.4,-1.9,-5.9,4.3,2.6,1.2,-7.3,6.7,5.2,5.9,5.0,8.9,-1.7,-1.1)*buf[6]+mat4(-11.9,-11.6,6.1,11.2,2.1,-6.2,-1.7,-0.7,0.,0.,0.,0.,0.,0.,0.,0.)*buf[7]+vec4(-4.1,-3.2,-4.5,-3.6));
      buf[3]=sigmoid(mat4(3.1,-13.7,1.8,3.2,0.6,12.7,1.9,0.5,-0.0,4.4,1.4,1.8,5.0,13.0,3.3,-4.5)*buf[6]+mat4(-0.1,7.7,-3.1,4.7,0.6,3.7,-0.8,-0.3,0.,0.,0.,0.,0.,0.,0.,0.)*buf[7]+vec4(-1.1,-21.6,0.7,1.2));
      buf[0]=sigmoid(mat4(1.6,1.3,2.9,0.,-1.8,-1.4,-3.5,0.,-1.3,-1.0,-2.3,0.,0.2,0.2,0.4,0.)*buf[0]+mat4(-0.6,-0.5,-0.9,0.,0.1,0.1,0.1,0.,-2.9,-2.5,-4.9,0.,1.4,1.1,2.5,0.)*buf[1]+mat4(-1.2,-1.0,-2.1,0.,-0.7,-0.5,-1.4,0.,0.1,0.1,0.2,0.,0.9,0.8,1.2,0.)*buf[2]+mat4(-2.4,-1.9,-4.3,0.,-22.6,-18.0,-41.9,0.,0.6,0.5,1.1,0.,-1.5,-1.3,-2.6,0.)*buf[3]+vec4(-1.5,-3.6,0.2,0.));
      return vec4(buf[0].xyz,1.);
  }
  void main(){
      vec2 uv=(gl_FragCoord.xy/uResolution.xy)*2.-1.; uv.y*=-1.;
      uv+=uWarp*vec2(sin(uv.y*6.2+uTime*0.5),cos(uv.x*6.2+uTime*0.5))*0.05;
      vec4 col=cppn(uv,0.3*sin(0.8*uTime),0.3*sin(1.2*uTime),0.3*sin(0.9*uTime));
      col.rgb=hueShiftRGB(col.rgb,uHueShift);
      col.rgb*=2.5;
      col.rgb*=1.-(sin(gl_FragCoord.y*uScanFreq)*0.5+0.5)*uScan;
      col.rgb+=(rand(gl_FragCoord.xy+uTime)-0.5)*uNoise;
      gl_FragColor=vec4(clamp(col.rgb,0.,1.),1.);
  }
`;

export default function WebGLBackground({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const compileShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Create full screen quad
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {
      uTime: gl.getUniformLocation(program, 'uTime'),
      uResolution: gl.getUniformLocation(program, 'uResolution'),
      uHueShift: gl.getUniformLocation(program, 'uHueShift'),
      uNoise: gl.getUniformLocation(program, 'uNoise'),
      uScan: gl.getUniformLocation(program, 'uScan'),
      uScanFreq: gl.getUniformLocation(program, 'uScanFreq'),
      uWarp: gl.getUniformLocation(program, 'uWarp')
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uniforms.uResolution, canvas.width, canvas.height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Set initial uniforms
    gl.uniform1f(uniforms.uHueShift, 20.0);
    gl.uniform1f(uniforms.uNoise, 0.05);
    gl.uniform1f(uniforms.uScan, 0.0);
    gl.uniform1f(uniforms.uScanFreq, 0.0);
    gl.uniform1f(uniforms.uWarp, 2.5);

    let animationFrameId;
    const startTime = performance.now();

    const render = () => {
      const time = ((performance.now() - startTime) / 1000) * 2.5;
      gl.uniform1f(uniforms.uTime, time);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}