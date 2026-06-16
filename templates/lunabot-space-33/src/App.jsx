import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Generate stars
        function generateStars() {
            const container = document.getElementById('stars');
            for (let i = 0; i < 150; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = Math.random() * 2 + 1 + 'px';
                star.style.height = star.style.width;
                star.style.animationDelay = Math.random() * 3 + 's';
                container.appendChild(star);
            }
        }
        generateStars();

        // Simulate live data updates
        function updateTelemetry() {
            const o2 = (97 + Math.random() * 2).toFixed(1);
            const temp = (-25 + Math.random() * 5).toFixed(0);
            const battery = Math.max(80, Math.min(95, 87 + (Math.random() - 0.5) * 2)).toFixed(0);

            document.getElementById('o2-level').textContent = o2 + '%';
            document.getElementById('o2-display').textContent = o2 + '%';
            document.getElementById('temp-level').textContent = temp + '°C';
            document.getElementById('temp-display').textContent = temp + '°C';
            document.getElementById('battery-level').textContent = battery + '%';
            document.getElementById('battery-display').textContent = battery + '%';

            // Update speed
            const speed = (0.3 + Math.random() * 0.4).toFixed(2);
            document.getElementById('speed-data').textContent = speed + ' m/s';

            // Update IMU
            const imu = (0.01 + Math.random() * 0.02).toFixed(2);
            document.getElementById('imu-data').textContent = '±' + imu + '°';
        }

        // Add log entries
        const logMessages = [
            { level: 'INFO', color: 'green', msg: 'Waypoint navigation complete' },
            { level: 'DEBUG', color: 'cyan', msg: 'Sensor fusion update: 100Hz' },
            { level: 'INFO', color: 'green', msg: 'Map update: 1,247 new features' },
            { level: 'WARN', color: 'amber', msg: 'Low texture area detected' },
            { level: 'INFO', color: 'green', msg: 'Behavior tree: patrol state' },
            { level: 'DEBUG', color: 'cyan', msg: 'Path cost recalculated' },
        ];

        function addLogEntry() {
            const container = document.getElementById('log-container');
            const log = logMessages[Math.floor(Math.random() * logMessages.length)];
            const time = new Date().toTimeString().split(' ')[0];
            const entry = document.createElement('div');
            entry.className = 'text-gray-500';
            entry.innerHTML = `[${time}] <span class="text-${log.color}-400">${log.level}</span> ${log.msg}`;
            container.appendChild(entry);
            container.scrollTop = container.scrollHeight;
            
            if (container.children.length > 20) {
                container.removeChild(container.firstChild);
            }
        }

        // Robot movement simulation
        let robotX = 50;
        let robotY = 50;
        function moveRobot() {
            robotX += (Math.random() - 0.5) * 5;
            robotY += (Math.random() - 0.5) * 5;
            robotX = Math.max(10, Math.min(90, robotX));
            robotY = Math.max(10, Math.min(90, robotY));
            
            const marker = document.getElementById('robot-marker');
            marker.style.left = robotX + '%';
            marker.style.top = robotY + '%';
        }

        // Patrol button
        document.getElementById('patrol-btn').addEventListener('click', function() {
            this.innerHTML = '<iconify-icon icon="lucide:loader-2" width="16" height="16" class="animate-spin" style="stroke-width: 1.5"></iconify-icon> Patrolling...';
            document.getElementById('patrol-status').textContent = 'Patrolling';
        });

        // Alert button
        document.getElementById('alert-btn').addEventListener('click', function() {
            document.getElementById('patrol-status').textContent = 'STOPPED';
            document.getElementById('patrol-status').className = 'text-2xl sm:text-3xl font-semibold tracking-tight text-red-400';
            addLogEntry();
            const container = document.getElementById('log-container');
            const entry = document.createElement('div');
            entry.className = 'text-gray-500';
            entry.innerHTML = `[${new Date().toTimeString().split(' ')[0]}] <span class="text-red-400">ALERT</span> Emergency stop triggered!`;
            container.appendChild(entry);
        });

        // Run updates
        setInterval(updateTelemetry, 2000);
        setInterval(addLogEntry, 3000);
        setInterval(moveRobot, 1000);

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0" id="stars"><div className="star" style={{left: '10.3218%', top: '3.99979%', width: '2.27772px', height: '2.27772px', animationDelay: '1.80425s'}}></div><div className="star" style={{left: '85.6887%', top: '91.6293%', width: '1.46603px', height: '1.46603px', animationDelay: '2.20872s'}}></div><div className="star" style={{left: '14.2147%', top: '52.2387%', width: '2.36505px', height: '2.36505px', animationDelay: '1.12636s'}}></div><div className="star" style={{left: '27.322%', top: '22.7278%', width: '1.72167px', height: '1.72167px', animationDelay: '0.766633s'}}></div><div className="star" style={{left: '21.5099%', top: '92.1794%', width: '2.60309px', height: '2.60309px', animationDelay: '0.717871s'}}></div><div className="star" style={{left: '15.3336%', top: '95.5729%', width: '2.59736px', height: '2.59736px', animationDelay: '0.375804s'}}></div><div className="star" style={{left: '37.2943%', top: '10.4579%', width: '2.91254px', height: '2.91254px', animationDelay: '0.267486s'}}></div><div className="star" style={{left: '73.1666%', top: '98.9126%', width: '2.43346px', height: '2.43346px', animationDelay: '0.984979s'}}></div><div className="star" style={{left: '52.1822%', top: '77.9718%', width: '2.64862px', height: '2.64862px', animationDelay: '2.21893s'}}></div><div className="star" style={{left: '51.5247%', top: '24.9929%', width: '2.22458px', height: '2.22458px', animationDelay: '2.05469s'}}></div><div className="star" style={{left: '38.4834%', top: '13.8603%', width: '2.6728px', height: '2.6728px', animationDelay: '2.60984s'}}></div><div className="star" style={{left: '6.81741%', top: '21.0995%', width: '2.44596px', height: '2.44596px', animationDelay: '1.12268s'}}></div><div className="star" style={{left: '99.3843%', top: '38.3685%', width: '1.30843px', height: '1.30843px', animationDelay: '0.210565s'}}></div><div className="star" style={{left: '12.1715%', top: '49.2223%', width: '1.25393px', height: '1.25393px', animationDelay: '1.65555s'}}></div><div className="star" style={{left: '1.44475%', top: '22.4886%', width: '2.40905px', height: '2.40905px', animationDelay: '0.592512s'}}></div><div className="star" style={{left: '70.1774%', top: '62.0991%', width: '2.77796px', height: '2.77796px', animationDelay: '1.00225s'}}></div><div className="star" style={{left: '12.7004%', top: '83.8691%', width: '1.62125px', height: '1.62125px', animationDelay: '2.23216s'}}></div><div className="star" style={{left: '36.6433%', top: '0.944673%', width: '2.02154px', height: '2.02154px', animationDelay: '1.82527s'}}></div><div className="star" style={{left: '70.2785%', top: '54.9829%', width: '2.35218px', height: '2.35218px', animationDelay: '1.24493s'}}></div><div className="star" style={{left: '81.7865%', top: '61.2703%', width: '2.42751px', height: '2.42751px', animationDelay: '2.18083s'}}></div><div className="star" style={{left: '16.0878%', top: '67.4622%', width: '2.11003px', height: '2.11003px', animationDelay: '1.99979s'}}></div><div className="star" style={{left: '41.7743%', top: '21.5703%', width: '2.16373px', height: '2.16373px', animationDelay: '1.97626s'}}></div><div className="star" style={{left: '44.5937%', top: '50.1644%', width: '2.28664px', height: '2.28664px', animationDelay: '0.163667s'}}></div><div className="star" style={{left: '28.5646%', top: '28.3413%', width: '2.82635px', height: '2.82635px', animationDelay: '1.6649s'}}></div><div className="star" style={{left: '39.7%', top: '11.4159%', width: '2.4697px', height: '2.4697px', animationDelay: '2.50155s'}}></div><div className="star" style={{left: '14.4345%', top: '61.1156%', width: '2.75132px', height: '2.75132px', animationDelay: '2.53475s'}}></div><div className="star" style={{left: '73.65%', top: '22.0504%', width: '2.54498px', height: '2.54498px', animationDelay: '1.15377s'}}></div><div className="star" style={{left: '32.79%', top: '59.417%', width: '2.39861px', height: '2.39861px', animationDelay: '2.33407s'}}></div><div className="star" style={{left: '32.8035%', top: '88.1935%', width: '2.48346px', height: '2.48346px', animationDelay: '1.92826s'}}></div><div className="star" style={{left: '48.8013%', top: '19.9923%', width: '1.21622px', height: '1.21622px', animationDelay: '2.11963s'}}></div><div className="star" style={{left: '93.2896%', top: '74.8207%', width: '1.92896px', height: '1.92896px', animationDelay: '2.74454s'}}></div><div className="star" style={{left: '59.7058%', top: '3.55683%', width: '2.5233px', height: '2.5233px', animationDelay: '0.0509987s'}}></div><div className="star" style={{left: '88.5574%', top: '55.6013%', width: '2.56814px', height: '2.56814px', animationDelay: '0.0798237s'}}></div><div className="star" style={{left: '43.3847%', top: '81.2442%', width: '1.16506px', height: '1.16506px', animationDelay: '1.46737s'}}></div><div className="star" style={{left: '53.1427%', top: '47.8342%', width: '1.50227px', height: '1.50227px', animationDelay: '1.48088s'}}></div><div className="star" style={{left: '62.4603%', top: '33.1784%', width: '2.04353px', height: '2.04353px', animationDelay: '1.7046s'}}></div><div className="star" style={{left: '68.5124%', top: '67.246%', width: '1.67645px', height: '1.67645px', animationDelay: '0.796197s'}}></div><div className="star" style={{left: '28.9258%', top: '55.2689%', width: '2.4784px', height: '2.4784px', animationDelay: '0.941558s'}}></div><div className="star" style={{left: '38.356%', top: '1.51321%', width: '1.73047px', height: '1.73047px', animationDelay: '1.91526s'}}></div><div className="star" style={{left: '84.6103%', top: '26.741%', width: '2.35272px', height: '2.35272px', animationDelay: '0.278577s'}}></div><div className="star" style={{left: '82.3556%', top: '27.1513%', width: '1.89894px', height: '1.89894px', animationDelay: '0.101468s'}}></div><div className="star" style={{left: '98.5415%', top: '14.1744%', width: '1.31296px', height: '1.31296px', animationDelay: '2.33962s'}}></div><div className="star" style={{left: '4.73577%', top: '7.12999%', width: '1.36217px', height: '1.36217px', animationDelay: '0.534903s'}}></div><div className="star" style={{left: '45.5521%', top: '95.7937%', width: '1.86127px', height: '1.86127px', animationDelay: '1.5518s'}}></div><div className="star" style={{left: '42.6775%', top: '37.3673%', width: '2.02181px', height: '2.02181px', animationDelay: '0.311584s'}}></div><div className="star" style={{left: '96.6995%', top: '48.7825%', width: '1.97788px', height: '1.97788px', animationDelay: '1.46464s'}}></div><div className="star" style={{left: '8.50638%', top: '9.78361%', width: '1.88903px', height: '1.88903px', animationDelay: '0.534096s'}}></div><div className="star" style={{left: '97.9891%', top: '4.59471%', width: '1.00285px', height: '1.00285px', animationDelay: '1.3838s'}}></div><div className="star" style={{left: '44.4969%', top: '28.6248%', width: '2.08586px', height: '2.08586px', animationDelay: '1.87785s'}}></div><div className="star" style={{left: '89.6179%', top: '36.3306%', width: '2.10217px', height: '2.10217px', animationDelay: '2.28377s'}}></div><div className="star" style={{left: '77.8311%', top: '85.541%', width: '2.25449px', height: '2.25449px', animationDelay: '0.0625686s'}}></div><div className="star" style={{left: '65.1558%', top: '95.9974%', width: '2.30888px', height: '2.30888px', animationDelay: '2.58763s'}}></div><div className="star" style={{left: '65.5504%', top: '58.5372%', width: '2.06434px', height: '2.06434px', animationDelay: '0.27671s'}}></div><div className="star" style={{left: '28.2693%', top: '49.5503%', width: '1.8767px', height: '1.8767px', animationDelay: '0.889605s'}}></div><div className="star" style={{left: '45.4673%', top: '8.20334%', width: '2.67202px', height: '2.67202px', animationDelay: '2.84009s'}}></div><div className="star" style={{left: '6.01278%', top: '96.9203%', width: '2.49551px', height: '2.49551px', animationDelay: '2.60831s'}}></div><div className="star" style={{left: '54.9093%', top: '65.8176%', width: '1.92304px', height: '1.92304px', animationDelay: '2.73246s'}}></div><div className="star" style={{left: '70.4872%', top: '18.6124%', width: '1.50517px', height: '1.50517px', animationDelay: '0.0459296s'}}></div><div className="star" style={{left: '3.31614%', top: '46.8728%', width: '2.86727px', height: '2.86727px', animationDelay: '2.88196s'}}></div><div className="star" style={{left: '69.5608%', top: '15.2615%', width: '2.21442px', height: '2.21442px', animationDelay: '0.58261s'}}></div><div className="star" style={{left: '82.7152%', top: '50.097%', width: '1.44632px', height: '1.44632px', animationDelay: '0.164479s'}}></div><div className="star" style={{left: '75.8533%', top: '2.22389%', width: '2.45961px', height: '2.45961px', animationDelay: '2.25046s'}}></div><div className="star" style={{left: '84.5107%', top: '13.7027%', width: '2.42844px', height: '2.42844px', animationDelay: '1.36528s'}}></div><div className="star" style={{left: '82.9399%', top: '51.9569%', width: '2.63163px', height: '2.63163px', animationDelay: '0.460696s'}}></div><div className="star" style={{left: '78.7981%', top: '51.555%', width: '1.06499px', height: '1.06499px', animationDelay: '0.67343s'}}></div><div className="star" style={{left: '16.2826%', top: '34.9378%', width: '1.75295px', height: '1.75295px', animationDelay: '1.55297s'}}></div><div className="star" style={{left: '32.9438%', top: '69.9274%', width: '2.77427px', height: '2.77427px', animationDelay: '0.320912s'}}></div><div className="star" style={{left: '76.3703%', top: '79.8513%', width: '1.80463px', height: '1.80463px', animationDelay: '0.222445s'}}></div><div className="star" style={{left: '76.6215%', top: '88.2381%', width: '1.0241px', height: '1.0241px', animationDelay: '2.85071s'}}></div><div className="star" style={{left: '66.7604%', top: '12.569%', width: '2.76076px', height: '2.76076px', animationDelay: '2.99604s'}}></div><div className="star" style={{left: '30.4263%', top: '91.467%', width: '1.41595px', height: '1.41595px', animationDelay: '1.36532s'}}></div><div className="star" style={{left: '90.0933%', top: '83.9574%', width: '1.11346px', height: '1.11346px', animationDelay: '1.47822s'}}></div><div className="star" style={{left: '37.9608%', top: '93.7153%', width: '1.13827px', height: '1.13827px', animationDelay: '1.46343s'}}></div><div className="star" style={{left: '23.493%', top: '2.01612%', width: '2.11362px', height: '2.11362px', animationDelay: '2.94861s'}}></div><div className="star" style={{left: '4.46874%', top: '40.2882%', width: '2.01449px', height: '2.01449px', animationDelay: '0.27372s'}}></div><div className="star" style={{left: '65.8569%', top: '99.7281%', width: '1.49864px', height: '1.49864px', animationDelay: '1.65494s'}}></div><div className="star" style={{left: '85.435%', top: '17.2082%', width: '2.9118px', height: '2.9118px', animationDelay: '2.99048s'}}></div><div className="star" style={{left: '98.7781%', top: '75.231%', width: '2.55897px', height: '2.55897px', animationDelay: '2.46706s'}}></div><div className="star" style={{left: '31.2642%', top: '49.9156%', width: '2.12833px', height: '2.12833px', animationDelay: '1.05311s'}}></div><div className="star" style={{left: '57.6237%', top: '28.0089%', width: '1.62843px', height: '1.62843px', animationDelay: '2.88495s'}}></div><div className="star" style={{left: '25.9528%', top: '88.2072%', width: '1.69585px', height: '1.69585px', animationDelay: '2.79251s'}}></div><div className="star" style={{left: '57.0723%', top: '21.1974%', width: '1.47032px', height: '1.47032px', animationDelay: '2.06264s'}}></div><div className="star" style={{left: '86.4568%', top: '37.8629%', width: '1.36356px', height: '1.36356px', animationDelay: '0.782817s'}}></div><div className="star" style={{left: '64.7641%', top: '36.6538%', width: '1.01256px', height: '1.01256px', animationDelay: '2.34852s'}}></div><div className="star" style={{left: '64.4548%', top: '60.4219%', width: '1.61633px', height: '1.61633px', animationDelay: '1.07352s'}}></div><div className="star" style={{left: '98.9434%', top: '11.4023%', width: '1.28675px', height: '1.28675px', animationDelay: '1.95795s'}}></div><div className="star" style={{left: '59.0708%', top: '40.2545%', width: '2.54778px', height: '2.54778px', animationDelay: '2.84162s'}}></div><div className="star" style={{left: '47.9903%', top: '94.6451%', width: '2.75998px', height: '2.75998px', animationDelay: '1.25609s'}}></div><div className="star" style={{left: '72.4498%', top: '92.8222%', width: '1.4126px', height: '1.4126px', animationDelay: '0.0248401s'}}></div><div className="star" style={{left: '73.9674%', top: '41.509%', width: '1.57155px', height: '1.57155px', animationDelay: '1.39931s'}}></div><div className="star" style={{left: '44.9378%', top: '37.3371%', width: '2.88518px', height: '2.88518px', animationDelay: '1.51251s'}}></div><div className="star" style={{left: '88.7652%', top: '80.1557%', width: '2.68345px', height: '2.68345px', animationDelay: '2.9178s'}}></div><div className="star" style={{left: '82.5826%', top: '55.148%', width: '2.86329px', height: '2.86329px', animationDelay: '0.655229s'}}></div><div className="star" style={{left: '50.468%', top: '78.8539%', width: '1.94986px', height: '1.94986px', animationDelay: '2.64596s'}}></div><div className="star" style={{left: '65.9393%', top: '50.2967%', width: '2.42331px', height: '2.42331px', animationDelay: '2.7324s'}}></div><div className="star" style={{left: '43.2607%', top: '6.83423%', width: '1.53056px', height: '1.53056px', animationDelay: '2.24681s'}}></div><div className="star" style={{left: '22.3494%', top: '23.0907%', width: '1.80261px', height: '1.80261px', animationDelay: '0.584524s'}}></div><div className="star" style={{left: '41.7357%', top: '81.6917%', width: '2.81045px', height: '2.81045px', animationDelay: '1.74349s'}}></div><div className="star" style={{left: '4.16583%', top: '82.9762%', width: '1.57839px', height: '1.57839px', animationDelay: '2.22812s'}}></div><div className="star" style={{left: '84.6034%', top: '93.2222%', width: '2.25654px', height: '2.25654px', animationDelay: '1.56923s'}}></div><div className="star" style={{left: '6.29912%', top: '84.2294%', width: '1.16866px', height: '1.16866px', animationDelay: '0.0370205s'}}></div><div className="star" style={{left: '53.233%', top: '16.1832%', width: '2.14604px', height: '2.14604px', animationDelay: '0.794838s'}}></div><div className="star" style={{left: '64.5296%', top: '65.4369%', width: '1.62624px', height: '1.62624px', animationDelay: '0.880505s'}}></div><div className="star" style={{left: '38.6545%', top: '27.1655%', width: '2.71565px', height: '2.71565px', animationDelay: '2.63097s'}}></div><div className="star" style={{left: '85.6898%', top: '92.66%', width: '1.02313px', height: '1.02313px', animationDelay: '2.07756s'}}></div><div className="star" style={{left: '10.7033%', top: '23.0988%', width: '2.09824px', height: '2.09824px', animationDelay: '1.23941s'}}></div><div className="star" style={{left: '80.6618%', top: '0.0534493%', width: '2.92891px', height: '2.92891px', animationDelay: '2.7335s'}}></div><div className="star" style={{left: '64.0519%', top: '36.5238%', width: '1.28339px', height: '1.28339px', animationDelay: '2.00456s'}}></div><div className="star" style={{left: '78.6435%', top: '81.6837%', width: '2.08383px', height: '2.08383px', animationDelay: '2.4214s'}}></div><div className="star" style={{left: '25.0239%', top: '55.1122%', width: '2.77724px', height: '2.77724px', animationDelay: '1.5749s'}}></div><div className="star" style={{left: '97.7409%', top: '68.944%', width: '1.72491px', height: '1.72491px', animationDelay: '2.32734s'}}></div><div className="star" style={{left: '39.147%', top: '55.9768%', width: '2.55971px', height: '2.55971px', animationDelay: '2.90969s'}}></div><div className="star" style={{left: '47.7639%', top: '32.2378%', width: '1.07317px', height: '1.07317px', animationDelay: '2.97896s'}}></div><div className="star" style={{left: '23.3058%', top: '21.7979%', width: '1.64815px', height: '1.64815px', animationDelay: '2.17824s'}}></div><div className="star" style={{left: '49.635%', top: '48.4774%', width: '1.78766px', height: '1.78766px', animationDelay: '1.07627s'}}></div><div className="star" style={{left: '65.6168%', top: '50.5526%', width: '1.96118px', height: '1.96118px', animationDelay: '0.657145s'}}></div><div className="star" style={{left: '23.8818%', top: '22.4635%', width: '2.27449px', height: '2.27449px', animationDelay: '0.123077s'}}></div><div className="star" style={{left: '38.4294%', top: '93.5474%', width: '2.4713px', height: '2.4713px', animationDelay: '2.81005s'}}></div><div className="star" style={{left: '26.958%', top: '3.07543%', width: '2.39827px', height: '2.39827px', animationDelay: '0.466713s'}}></div><div className="star" style={{left: '21.5232%', top: '83.7456%', width: '1.07154px', height: '1.07154px', animationDelay: '2.98322s'}}></div><div className="star" style={{left: '35.1201%', top: '35.4362%', width: '1.52023px', height: '1.52023px', animationDelay: '0.102102s'}}></div><div className="star" style={{left: '66.7387%', top: '77.1526%', width: '2.16391px', height: '2.16391px', animationDelay: '2.69997s'}}></div><div className="star" style={{left: '54.9723%', top: '30.4352%', width: '1.308px', height: '1.308px', animationDelay: '2.30184s'}}></div><div className="star" style={{left: '62.2381%', top: '66.7214%', width: '2.42869px', height: '2.42869px', animationDelay: '0.130076s'}}></div><div className="star" style={{left: '57.0073%', top: '4.62092%', width: '1.87624px', height: '1.87624px', animationDelay: '1.88912s'}}></div><div className="star" style={{left: '4.12602%', top: '50.8688%', width: '2.26525px', height: '2.26525px', animationDelay: '0.590639s'}}></div><div className="star" style={{left: '75.3417%', top: '12.4377%', width: '2.63346px', height: '2.63346px', animationDelay: '2.97334s'}}></div><div className="star" style={{left: '20.4391%', top: '90.5196%', width: '1.24893px', height: '1.24893px', animationDelay: '0.344777s'}}></div><div className="star" style={{left: '43.1448%', top: '13.3208%', width: '2.17654px', height: '2.17654px', animationDelay: '1.51223s'}}></div><div className="star" style={{left: '21.0405%', top: '71.8868%', width: '2.71301px', height: '2.71301px', animationDelay: '0.459883s'}}></div><div className="star" style={{left: '67.7839%', top: '12.7452%', width: '2.86056px', height: '2.86056px', animationDelay: '2.46407s'}}></div><div className="star" style={{left: '32.9384%', top: '97.4962%', width: '2.42747px', height: '2.42747px', animationDelay: '0.721019s'}}></div><div className="star" style={{left: '41.3105%', top: '31.0815%', width: '1.37373px', height: '1.37373px', animationDelay: '0.858844s'}}></div><div className="star" style={{left: '98.0853%', top: '20.4834%', width: '1.34888px', height: '1.34888px', animationDelay: '1.72262s'}}></div><div className="star" style={{left: '12.7988%', top: '70.0693%', width: '2.53261px', height: '2.53261px', animationDelay: '2.45699s'}}></div><div className="star" style={{left: '4.1552%', top: '87.5466%', width: '2.49267px', height: '2.49267px', animationDelay: '0.146578s'}}></div><div className="star" style={{left: '51.7144%', top: '61.9669%', width: '2.98813px', height: '2.98813px', animationDelay: '1.29521s'}}></div><div className="star" style={{left: '15.6049%', top: '39.1289%', width: '1.80238px', height: '1.80238px', animationDelay: '0.800518s'}}></div><div className="star" style={{left: '38.3232%', top: '44.5678%', width: '2.10546px', height: '2.10546px', animationDelay: '0.774648s'}}></div><div className="star" style={{left: '49.6621%', top: '88.5063%', width: '1.2348px', height: '1.2348px', animationDelay: '2.60175s'}}></div><div className="star" style={{left: '1.60731%', top: '33.3832%', width: '2.77549px', height: '2.77549px', animationDelay: '2.65895s'}}></div><div className="star" style={{left: '8.15041%', top: '13.2033%', width: '1.84395px', height: '1.84395px', animationDelay: '0.581545s'}}></div><div className="star" style={{left: '34.4374%', top: '5.56374%', width: '1.15075px', height: '1.15075px', animationDelay: '0.80401s'}}></div><div className="star" style={{left: '93.817%', top: '30.3112%', width: '2.03029px', height: '2.03029px', animationDelay: '1.36864s'}}></div><div className="star" style={{left: '25.3044%', top: '68.4288%', width: '1.68537px', height: '1.68537px', animationDelay: '0.209922s'}}></div><div className="star" style={{left: '98.6586%', top: '93.7005%', width: '2.4418px', height: '2.4418px', animationDelay: '0.154346s'}}></div><div className="star" style={{left: '36.718%', top: '77.7062%', width: '2.83894px', height: '2.83894px', animationDelay: '1.55034s'}}></div><div className="star" style={{left: '55.1558%', top: '17.7528%', width: '1.16474px', height: '1.16474px', animationDelay: '0.737537s'}}></div><div className="star" style={{left: '95.3216%', top: '79.2292%', width: '1.04908px', height: '1.04908px', animationDelay: '0.375813s'}}></div><div className="star" style={{left: '47.2069%', top: '70.3328%', width: '2.75133px', height: '2.75133px', animationDelay: '1.74036s'}}></div></div>

<nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tighter">LB</span>
</div>
<span className="text-base font-semibold tracking-tight">LunaBot</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#dashboard">Dashboard</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#milestones">Milestones</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#telemetry">Telemetry</a>
</div>
<button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                    Launch Console
                </button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-16">
<div className="overflow-hidden absolute top-0 right-0 bottom-0 left-0">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
<div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs text-gray-300">Systems Online • GPS-Denied Navigation Active</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight mb-6">
                Autonomous Robotics<br/>
<span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">for the Moon</span>
</h1>
<p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Advanced ROS-based autonomous navigation system designed for sustained human presence on the lunar surface. Multi-sensor fusion, real-time SLAM, and intelligent patrol capabilities.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
<iconify-icon height="18" icon="lucide:rocket" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Start Mission
                </button>
<button className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
<iconify-icon height="18" icon="lucide:play" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Watch Demo
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 float-animation">
<div className="w-32 h-32 sm:w-48 sm:h-48 relative">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/10 glow flex items-center justify-center">
<iconify-icon className="text-indigo-400" height="64" icon="lucide:bot" style={{strokeWidth: '1.5'}} width="64"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-8 border-y border-white/5 bg-black/30 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-green-400" id="o2-level">98.7%</div>
<div className="text-xs text-gray-500 mt-1">O₂ Level</div>
</div>
<div className="text-center">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-blue-400" id="temp-level">-23°C</div>
<div className="text-xs text-gray-500 mt-1">Temperature</div>
</div>
<div className="text-center">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-purple-400" id="battery-level">87%</div>
<div className="text-xs text-gray-500 mt-1">Battery</div>
</div>
<div className="text-center">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-amber-400" id="patrol-status">Active</div>
<div className="text-xs text-gray-500 mt-1">Patrol Status</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Advanced Capabilities</h2>
<p className="text-gray-400 max-w-2xl mx-auto">Engineered for the most demanding environments in our solar system</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all card-glow">
<div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-indigo-400" height="24" icon="lucide:radar" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Multi-Sensor Fusion</h3>
<p className="text-sm text-gray-400 leading-relaxed">LiDAR, Depth Cameras, and IMU integration for precise pose estimation in GPS-denied environments.</p>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all card-glow">
<div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-purple-400" height="24" icon="lucide:map" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Real-Time SLAM</h3>
<p className="text-sm text-gray-400 leading-relaxed">Simultaneous Localization and Mapping for high-resolution 2D/3D habitat mapping.</p>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-all card-glow">
<div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-pink-400" height="24" icon="lucide:shield-check" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Safety Sentinel</h3>
<p className="text-sm text-gray-400 leading-relaxed">Continuous environmental monitoring with instant alerts for O₂, temperature, and radiation.</p>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all card-glow">
<div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-cyan-400" height="24" icon="lucide:route" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Path Planning</h3>
<p className="text-sm text-gray-400 leading-relaxed">TEB/DWB planners for dynamic obstacle avoidance through narrow corridors and airlocks.</p>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all card-glow">
<div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-amber-400" height="24" icon="lucide:git-branch" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Behavior Trees</h3>
<p className="text-sm text-gray-400 leading-relaxed">ROS-based state machines for intelligent patrol loops and autonomous decision making.</p>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all card-glow">
<div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-green-400" height="24" icon="lucide:battery-charging" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Auto-Charging</h3>
<p className="text-sm text-gray-400 leading-relaxed">Intelligent return-to-base protocols with automatic docking and charging capabilities.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-black/30" id="dashboard">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Mission Control Dashboard</h2>
<p className="text-gray-400 max-w-2xl mx-auto">Real-time telemetry and system monitoring</p>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10">
<div className="flex items-center justify-between mb-6">
<h3 className="text-base font-medium">Habitat Map - SLAM Output</h3>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs text-gray-400">Live</span>
</div>
</div>
<div className="relative aspect-video bg-gray-900/50 rounded-xl overflow-hidden border border-white/5">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute w-4 h-4 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50" id="robot-marker" style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
<div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-50"></div>
</div>

<div className="absolute w-3 h-3 bg-amber-400 rounded-full" style={{left: '25%', top: '30%'}}></div>
<div className="absolute w-3 h-3 bg-amber-400 rounded-full" style={{left: '75%', top: '25%'}}></div>
<div className="absolute w-3 h-3 bg-amber-400 rounded-full" style={{left: '70%', top: '70%'}}></div>
<div className="absolute w-3 h-3 bg-green-400 rounded-full" style={{left: '20%', top: '75%'}}></div>

<svg className="absolute inset-0 w-full h-full">
<path className="animate-pulse" d="M 50% 50% L 25% 30% L 75% 25% L 70% 70% L 20% 75%" fill="none" stroke="rgba(99,102,241,0.5)" stroke-dasharray="5,5" strokeWidth="2"></path>
</svg>

<div className="absolute bottom-4 left-4 flex items-center gap-4 text-xs">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
<span className="text-gray-400">Robot</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-amber-400 rounded-full"></div>
<span className="text-gray-400">Waypoint</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
<span className="text-gray-400">Base</span>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
<h3 className="text-base font-medium mb-4">Environmental Sensors</h3>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-400">Oxygen Level</span>
<span className="text-green-400" id="o2-display">98.7%</span>
</div>
<div className="h-2 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full progress-bar" style={{width: '98.7%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-400">Temperature</span>
<span className="text-blue-400" id="temp-display">-23°C</span>
</div>
<div className="h-2 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full progress-bar" style={{width: '45%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-400">Radiation</span>
<span className="text-amber-400">0.12 mSv</span>
</div>
<div className="h-2 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full progress-bar" style={{width: '12%'}}></div>
</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
<h3 className="text-base font-medium mb-4">Robot Status</h3>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-green-400" height="18" icon="lucide:battery" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-gray-400">Battery</span>
</div>
<span className="text-sm font-medium" id="battery-display">87%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" height="18" icon="lucide:wifi" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-gray-400">Signal</span>
</div>
<span className="text-sm font-medium">Strong</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-purple-400" height="18" icon="lucide:cpu" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-gray-400">CPU Load</span>
</div>
<span className="text-sm font-medium">42%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-400" height="18" icon="lucide:hard-drive" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-gray-400">Storage</span>
</div>
<span className="text-sm font-medium">2.4 TB</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 p-6 rounded-2xl bg-white/5 border border-white/10">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div>
<h3 className="text-base font-medium mb-1">Mission Control</h3>
<p className="text-sm text-gray-400">Current Mission: Patrol Route Alpha • ETA: 23 min</p>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-sm font-medium rounded-lg transition-colors flex items-center gap-2" id="patrol-btn">
<iconify-icon height="16" icon="lucide:play" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                            Start Patrol
                        </button>
<button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-sm font-medium rounded-lg transition-colors flex items-center gap-2">
<iconify-icon height="16" icon="lucide:pause" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                            Pause
                        </button>
<button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-sm font-medium rounded-lg transition-colors flex items-center gap-2">
<iconify-icon height="16" icon="lucide:home" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                            Return to Base
                        </button>
<button className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 text-sm font-medium rounded-lg transition-colors flex items-center gap-2" id="alert-btn">
<iconify-icon height="16" icon="lucide:alert-triangle" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                            Emergency Stop
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24" id="milestones">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Development Milestones</h2>
<p className="text-gray-400 max-w-2xl mx-auto">Track our progress towards autonomous lunar operations</p>
</div>
<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-start gap-8">
<div className="md:w-1/2 md:text-right md:pr-12">
<div className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium mb-3">Completed</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Simulation &amp; Robot Modeling</h3>
<p className="text-sm text-gray-400 leading-relaxed">Lunar habitat simulation in Gazebo with realistic terrain, URDF model with LiDAR, Depth Cameras, and IMU sensors configured for low-gravity environments.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-green-500 border-4 border-gray-900 transform -translate-x-1/2 flex items-center justify-center">
<iconify-icon height="16" icon="lucide:check" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<div className="md:w-1/2 md:pl-12 pl-12 md:pl-0"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start gap-8">
<div className="md:w-1/2 md:pr-12 order-1 md:order-none"></div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-indigo-500 border-4 border-gray-900 transform -translate-x-1/2 flex items-center justify-center">
<iconify-icon className="animate-spin" height="16" icon="lucide:loader-2" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<div className="md:w-1/2 md:pl-12 pl-12">
<div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-medium mb-3">In Progress</div>
<h3 className="text-xl font-medium tracking-tight mb-2">GPS-Denied Mapping &amp; Localization</h3>
<p className="text-sm text-gray-400 leading-relaxed">Implementing Extended Kalman Filter for sensor fusion, developing real-time SLAM capabilities for 2D/3D habitat mapping.</p>
<div className="mt-4">
<div className="flex justify-between text-xs mb-2">
<span className="text-gray-500">Progress</span>
<span className="text-indigo-400">67%</span>
</div>
<div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" style={{width: '67%'}}></div>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start gap-8">
<div className="md:w-1/2 md:text-right md:pr-12">
<div className="inline-block px-3 py-1 rounded-full bg-gray-500/20 text-gray-400 text-xs font-medium mb-3">Upcoming</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Autonomous Navigation</h3>
<p className="text-sm text-gray-400 leading-relaxed">TEB/DWB local path planners for dynamic obstacle avoidance, optimized global path planning for narrow corridors and airlocks.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gray-700 border-4 border-gray-900 transform -translate-x-1/2 flex items-center justify-center">
<span className="text-xs font-medium">3</span>
</div>
<div className="md:w-1/2 md:pl-12 pl-12 md:pl-0"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start gap-8">
<div className="md:w-1/2 md:pr-12 order-1 md:order-none"></div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gray-700 border-4 border-gray-900 transform -translate-x-1/2 flex items-center justify-center">
<span className="text-xs font-medium">4</span>
</div>
<div className="md:w-1/2 md:pl-12 pl-12">
<div className="inline-block px-3 py-1 rounded-full bg-gray-500/20 text-gray-400 text-xs font-medium mb-3">Upcoming</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Maintenance Monitoring &amp; Patrol</h3>
<p className="text-sm text-gray-400 leading-relaxed">Environmental parameter monitoring with threshold alerts, ROS Behavior Trees for autonomous patrol and return-to-base protocols.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-black/30" id="telemetry">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Live Telemetry Stream</h2>
<p className="text-gray-400 max-w-2xl mx-auto">Real-time data feed from LunaBot sensors</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-5 rounded-xl bg-white/5 border border-white/10">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-indigo-400" height="20" icon="lucide:scan" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs text-green-400">Active</span>
</div>
<div className="text-2xl font-semibold tracking-tight mb-1" id="lidar-data">360°</div>
<div className="text-xs text-gray-500">LiDAR Coverage</div>
<div className="mt-3 flex items-center gap-1">
<div className="h-8 w-1 bg-indigo-500 rounded-full"></div>
<div className="h-6 w-1 bg-indigo-500/70 rounded-full"></div>
<div className="h-10 w-1 bg-indigo-500 rounded-full"></div>
<div className="h-4 w-1 bg-indigo-500/50 rounded-full"></div>
<div className="h-7 w-1 bg-indigo-500/80 rounded-full"></div>
<div className="h-5 w-1 bg-indigo-500/60 rounded-full"></div>
<div className="h-9 w-1 bg-indigo-500 rounded-full"></div>
<div className="h-3 w-1 bg-indigo-500/40 rounded-full"></div>
</div>
</div>
<div className="p-5 rounded-xl bg-white/5 border border-white/10">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-purple-400" height="20" icon="lucide:camera" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs text-green-400">Recording</span>
</div>
<div className="text-2xl font-semibold tracking-tight mb-1">30 FPS</div>
<div className="text-xs text-gray-500">Depth Camera</div>
<div className="mt-3 grid grid-cols-8 gap-1">
<div className="h-2 w-2 rounded-sm bg-purple-500"></div>
<div className="h-2 w-2 rounded-sm bg-purple-400"></div>
<div className="h-2 w-2 rounded-sm bg-purple-600"></div>
<div className="h-2 w-2 rounded-sm bg-purple-500"></div>
<div className="h-2 w-2 rounded-sm bg-purple-400"></div>
<div className="h-2 w-2 rounded-sm bg-purple-500"></div>
<div className="h-2 w-2 rounded-sm bg-purple-600"></div>
<div className="h-2 w-2 rounded-sm bg-purple-400"></div>
</div>
</div>
<div className="p-5 rounded-xl bg-white/5 border border-white/10">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-cyan-400" height="20" icon="lucide:move-3d" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs text-green-400">Calibrated</span>
</div>
<div className="text-2xl font-semibold tracking-tight mb-1" id="imu-data">±0.02°</div>
<div className="text-xs text-gray-500">IMU Accuracy</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs">
<span className="text-gray-500">X:</span>
<span className="text-cyan-400">0.12</span>
</div>
<div className="text-xs">
<span className="text-gray-500">Y:</span>
<span className="text-cyan-400">-0.08</span>
</div>
<div className="text-xs">
<span className="text-gray-500">Z:</span>
<span className="text-cyan-400">9.81</span>
</div>
</div>
</div>
<div className="p-5 rounded-xl bg-white/5 border border-white/10">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-amber-400" height="20" icon="lucide:gauge" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs text-green-400">Nominal</span>
</div>
<div className="text-2xl font-semibold tracking-tight mb-1" id="speed-data">0.5 m/s</div>
<div className="text-xs text-gray-500">Current Speed</div>
<div className="mt-3 h-2 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full" style={{width: '50%'}}></div>
</div>
</div>
</div>

<div className="mt-8 p-6 rounded-2xl bg-black/50 border border-white/10 font-mono">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400" height="18" icon="lucide:terminal" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-gray-400">System Log</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
</div>
<div className="space-y-1 text-xs max-h-48 overflow-y-auto" id="log-container">
<div className="text-gray-500">[14:32:01] <span className="text-green-400">INFO</span> SLAM node initialized successfully</div>
<div className="text-gray-500">[14:32:02] <span className="text-green-400">INFO</span> LiDAR sensor: 10,000 points/scan</div>
<div className="text-gray-500">[14:32:03] <span className="text-cyan-400">DEBUG</span> EKF pose estimate updated</div>
<div className="text-gray-500">[14:32:04] <span className="text-green-400">INFO</span> Patrol waypoint 1 reached</div>
<div className="text-gray-500">[14:32:05] <span className="text-amber-400">WARN</span> Obstacle detected at 2.3m</div>
<div className="text-gray-500">[14:32:06] <span className="text-green-400">INFO</span> Path replanning complete</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="p-12 rounded-3xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/20">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Ready to Explore?</h2>
<p className="text-gray-400 mb-8 max-w-xl mx-auto">Join us in developing the next generation of autonomous lunar robotics. Open source, community-driven, space-ready.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
<iconify-icon height="18" icon="lucide:github" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        View on GitHub
                    </button>
<button className="w-full sm:w-auto px-8 py-3 bg-white/10 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
<iconify-icon height="18" icon="lucide:book-open" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        Documentation
                    </button>
</div>
</div>
</div>
</section>

<footer className="relative z-10 py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tighter">LB</span>
</div>
<span className="text-base font-semibold tracking-tight">LunaBot</span>
</div>
<div className="flex items-center gap-6 text-sm text-gray-400">
<a className="hover:text-white transition-colors" href="#">Documentation</a>
<a className="hover:text-white transition-colors" href="#">API</a>
<a className="hover:text-white transition-colors" href="#">Community</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="lucide:github" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="lucide:twitter" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="lucide:linkedin" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
<div className="mt-8 text-center text-xs text-gray-600">
                © 2024 LunaBot Project. Building the future of autonomous lunar exploration.
            </div>
</div>
</footer>


    </>
  );
}
