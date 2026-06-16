import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-3xl mx-auto px-4 py-10">
<header className="mb-8">
<h1 className="text-3xl font-bold text-blue-800 mb-2">School Policy for Academic Year Programs</h1>
<p className="text-sm text-gray-600">Effective for the 2024-2025 Academic Year</p>
</header>
<section className="mb-8">
<h2 className="text-2xl font-semibold text-blue-700 mb-4">Enrollment &amp; Tuition Policy</h2>
<ul className="list-disc list-inside space-y-2">
<li>
<span className="font-medium">Academic Year:</span> Altos Academy’s academic year includes both <span className="font-medium">Fall</span> and <span className="font-medium">Spring</span> semesters. Students are automatically enrolled in the Spring semester upon completing the Fall semester. Enrollment is complete once payment has been received.
        </li>
<li>
<span className="font-medium">Registration Fee:</span> A one-time, non-refundable fee of <span className="font-semibold">$50 per student</span> is required each academic year, regardless of the number of courses enrolled.
        </li>
<li>
<span className="font-medium">Material Fees:</span> Some courses may require additional material fees. Please refer to individual course descriptions for specific charges.
        </li>
<li>
<span className="font-medium">Payment:</span> Tuition and all applicable fees are due at the time of enrollment.
        </li>
<li>
<span className="font-medium">Rolling Enrollment:</span> We accept new enrollments throughout the school year. Tuition will be prorated for students joining after a course has started.
        </li>
</ul>
</section>
<section className="mb-8">
<h2 className="text-2xl font-semibold text-blue-700 mb-4">Refund &amp; Withdrawal Policy</h2>
<p className="mb-2">We understand that plans can change, and we strive to be as flexible as possible while maintaining fairness for all families. Please review the following policy carefully:</p>
<div className="bg-white rounded-lg shadow p-4 mb-4">
<h3 className="font-semibold text-lg text-blue-600 mb-2">Before the Course Starts</h3>
<p>A <span className="font-medium">full refund</span> will be issued if you withdraw before the first class.</p>
</div>
<div className="bg-white rounded-lg shadow p-4 mb-4">
<h3 className="font-semibold text-lg text-blue-600 mb-2">After the Course Has Started</h3>
<ul className="list-disc list-inside space-y-1 ml-2">
<li>
            If you withdraw <span className="font-medium">after the first class but before the second</span>, you will receive a full refund of the <span className="font-medium">tuition only</span>. Registration and/or material fees remain non-refundable.
          </li>
<li>
            Once the second class has begun, tuition refunds will be issued as <span className="font-medium">school credit only</span>, based on the remaining prorated amount. This credit:
            <ul className="list-disc list-inside pl-6 mt-1">
<li>Can be used for any Altos Academy program within one year</li>
<li>Is non-transferable, except between siblings.</li>
</ul>
</li>
<li>
            Alternatively, you may provide a <span className="font-medium">30-day written notice</span> for a prorated tuition refund.
          </li>
</ul>
</div>
<div className="bg-white rounded-lg shadow p-4 mb-4">
<h3 className="font-semibold text-lg text-blue-600 mb-2">Missed Classes</h3>
<ul className="list-disc list-inside ml-2">
<li>We do not offer refunds for missed classes.</li>
<li>Make-up classes may be available and will be arranged when possible.</li>
</ul>
</div>
<div className="bg-white rounded-lg shadow p-4">
<h3 className="font-semibold text-lg text-blue-600 mb-2">How to Withdraw</h3>
<p>
          To cancel a class or request a refund, please email your request to 
          <a className="text-blue-700 underline" href="mailto:help@altos-academy.com">help@altos-academy.com</a>
</p>
<p className="text-xs text-gray-600 mt-2">
<span className="font-medium">*</span> Please note: If a balance refund (not a credit) is issued, a <span className="font-medium">$25 administrative fee</span> will be deducted.
        </p>
</div>
</section>
<section className="mb-8">
<h2 className="text-2xl font-semibold text-blue-700 mb-4">Summer Program Policy</h2>
<div className="mb-4">
<h3 className="font-semibold text-lg text-blue-600 mb-2">Early Registration Discount</h3>
<p>Register by <span className="font-medium">May 30, 2025</span>, and receive <span className="font-semibold">$50 off your tuition!</span></p>
</div>
<div className="mb-4">
<h3 className="font-semibold text-lg text-blue-600 mb-2">Referral Program</h3>
<p>
          When a current Altos Academy family refers a new family to the academy, both families receive a <span className="font-semibold">$25 credit</span> for future use.<br/>
          To redeem, please email 
          <a className="text-blue-700 underline" href="mailto:help@altos-academy.com">help@altos-academy.com</a> with the referral details.
        </p>
</div>
<div className="mb-4">
<h3 className="font-semibold text-lg text-blue-600 mb-2">Complimentary Lunch Hour Care</h3>
<p>
          Students enrolled in both the morning (9 AM–12 PM) and afternoon (1 PM–4 PM) camps during the same week will receive complimentary extended care from 12 PM–1 PM.
        </p>
<p className="text-xs text-gray-600 mt-1">
<span className="font-medium">*</span> Please note: Lunch is not provided—students must bring their own.
        </p>
</div>
<div>
<h3 className="font-semibold text-lg text-blue-600 mb-2">Cancellation and Refund Policy</h3>
<ul className="list-disc list-inside space-y-2 ml-2">
<li>
<span className="font-medium">Full Refund:</span> Cancel by <span className="font-semibold">June 1, 2025</span>, to receive a <span className="font-medium">100% refund, minus a $25 administrative fee</span>.
          </li>
<li>
<span className="font-medium">After June 1, 2025:</span> Cancellations made after this date will receive school credit equal to the paid amount. This credit can be used toward any Altos Academy program within one year and is non-transferable, except between siblings.
          </li>
</ul>
<p className="mt-2">
          To request a cancellation, please email 
          <a className="text-blue-700 underline" href="mailto:help@altos-academy.com">help@altos-academy.com</a> with your child’s name and the specific camp session you wish to cancel.
        </p>
</div>
</section>
<footer className="pt-8 border-t border-gray-200 mt-10 text-center text-sm text-gray-500">
      © 2024 Altos Academy. All rights reserved.
    </footer>
</div>

    </>
  );
}
