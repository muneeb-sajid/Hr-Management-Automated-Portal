import React, { useState } from 'react';
import {
  ChevronRight,
  Lightbulb,
  Check,
  Camera,
  ChevronDown,
  Calendar,
  SlidersHorizontal
} from 'lucide-react';

const AddEmployee = () => {
  // Step State
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    fullName: 'Johnathan Smith',
    email: 'jsmith@enterprise.com',
    phone: '+1 (555) 000-0000',
    dob: '',
    address: '123 Corporate Way, Suite 500, San Francisco, CA',
    department: '',
    jobTitle: 'Senior UX Designer',
    manager: '',
    startDate: '',
    baseSalary: '120,000',
    taxId: 'XXXX-XX-XXXX',
    bankDetails: ''
  });

  // Checklist State
  const [checklist, setChecklist] = useState({
    personalDetails: true,
    contractTerms: true,
    verifyDocs: false,
    assignHardware: false,
    portalAccess: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 p-6 lg:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* ========================================== */}
        {/* TOP BREADCRUMB & HEADER AREA               */}
        {/* ========================================== */}
        <div>
          <nav className="flex items-center space-x-2 text-xs font-semibold text-slate-400 mb-2">
            <span className="hover:text-slate-600 transition-colors cursor-pointer">Employees</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-indigo-600 font-bold">Add New Employee</span>
          </nav>

          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Add New Employee
          </h1>
          <p className="text-xs font-semibold text-slate-500 mt-1">
            Fill in the details to register a new member to the team.
          </p>
        </div>

        {/* ========================================== */}
        {/* MAIN CONTENT GRID                          */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* LEFT SIDE: STEPPER & FORM SECTIONS (2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* STEPPER WIZARD CARD */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center justify-between max-w-md mx-auto">
                
                {/* Step 1 */}
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="flex flex-col items-center space-y-1.5 focus:outline-none group"
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                      currentStep === 1
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : currentStep > 1
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    1
                  </div>
                  <span
                    className={`text-[11px] font-bold ${
                      currentStep === 1 ? 'text-indigo-600' : 'text-slate-400'
                    }`}
                  >
                    Personal
                  </span>
                </button>

                <div
                  className={`flex-1 h-0.5 mx-3 rounded-full transition-colors ${
                    currentStep > 1 ? 'bg-indigo-600' : 'bg-slate-200'
                  }`}
                />

                {/* Step 2 */}
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="flex flex-col items-center space-y-1.5 focus:outline-none group"
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                      currentStep === 2
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : currentStep > 2
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    2
                  </div>
                  <span
                    className={`text-[11px] font-bold ${
                      currentStep === 2 ? 'text-indigo-600' : 'text-slate-400'
                    }`}
                  >
                    Job & Role
                  </span>
                </button>

                <div
                  className={`flex-1 h-0.5 mx-3 rounded-full transition-colors ${
                    currentStep > 2 ? 'bg-indigo-600' : 'bg-slate-200'
                  }`}
                />

                {/* Step 3 */}
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="flex flex-col items-center space-y-1.5 focus:outline-none group"
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                      currentStep === 3
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    3
                  </div>
                  <span
                    className={`text-[11px] font-bold ${
                      currentStep === 3 ? 'text-indigo-600' : 'text-slate-400'
                    }`}
                  >
                    Payroll
                  </span>
                </button>
              </div>
            </div>

            {/* FORM CARD */}
            <form onSubmit={(e) => e.preventDefault()} className="bg-white border border-slate-200/80 rounded-2xl shadow-xs p-6 md:p-8 space-y-8">
              
              {/* SECTION 1: Personal Information */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-base font-bold text-slate-900">Personal Information</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Provide basic contact and identification details.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] font-extrabold tracking-wider uppercase text-slate-400 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Johnathan Smith"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-[10px] font-extrabold tracking-wider uppercase text-slate-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jsmith@enterprise.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-[10px] font-extrabold tracking-wider uppercase text-slate-400 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                    />
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-[10px] font-extrabold tracking-wider uppercase text-slate-400 mb-1.5">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Home Address */}
                <div>
                  <label className="block text-[10px] font-extrabold tracking-wider uppercase text-slate-400 mb-1.5">
                    Home Address
                  </label>
                  <textarea
                    rows={2}
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Corporate Way, Suite 500, San Francisco, CA"
                    className="w-full p-3.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all resize-none"
                  />
                </div>
              </div>

              <hr className="border-slate-100" />

              {/* SECTION 2: Job & Role */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-base font-bold text-slate-900">Job & Role</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Department */}
                  <div>
                    <label className="block text-[10px] font-extrabold tracking-wider uppercase text-slate-400 mb-1.5">
                      Department
                    </label>
                    <div className="relative">
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                      >
                        <option value="">Select Department</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Design">Design</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Product">Product</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Job Title */}
                  <div>
                    <label className="block text-[10px] font-extrabold tracking-wider uppercase text-slate-400 mb-1.5">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="Senior UX Designer"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                    />
                  </div>

                  {/* Reporting Manager */}
                  <div>
                    <label className="block text-[10px] font-extrabold tracking-wider uppercase text-slate-400 mb-1.5">
                      Reporting Manager
                    </label>
                    <div className="relative">
                      <select
                        name="manager"
                        value={formData.manager}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                      >
                        <option value="">Select Manager</option>
                        <option value="Alex Johnson">Alex Johnson</option>
                        <option value="Sarah Jenkins">Sarah Jenkins</option>
                        <option value="Marcus Thorne">Marcus Thorne</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Start Date */}
                  <div>
                    <label className="block text-[10px] font-extrabold tracking-wider uppercase text-slate-400 mb-1.5">
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                    />
                  </div>
                </div>
              </div>

              <hr className="border-slate-100" />

              {/* SECTION 3: Payroll & Benefits */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-base font-bold text-slate-900">Payroll & Benefits</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Base Salary (Annual) */}
                  <div>
                    <label className="block text-[10px] font-extrabold tracking-wider uppercase text-slate-400 mb-1.5">
                      Base Salary (Annual)
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-xs font-bold text-slate-400">
                        $
                      </span>
                      <input
                        type="text"
                        name="baseSalary"
                        value={formData.baseSalary}
                        onChange={handleChange}
                        placeholder="120,000"
                        className="w-full pl-8 pr-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* Tax ID / SSN */}
                  <div>
                    <label className="block text-[10px] font-extrabold tracking-wider uppercase text-slate-400 mb-1.5">
                      Tax ID / SSN
                    </label>
                    <input
                      type="text"
                      name="taxId"
                      value={formData.taxId}
                      onChange={handleChange}
                      placeholder="XXXX-XX-XXXX"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                    />
                  </div>
                </div>

                {/* Bank Account Details */}
                <div>
                  <label className="block text-[10px] font-extrabold tracking-wider uppercase text-slate-400 mb-1.5">
                    Bank Account Details (IBAN/Account Number)
                  </label>
                  <input
                    type="text"
                    name="bankDetails"
                    value={formData.bankDetails}
                    onChange={handleChange}
                    placeholder="Enter bank account or IBAN"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                  />
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  className="px-5 py-2.5 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>

                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    className="px-5 py-2.5 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    Save Draft
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
                  >
                    Create Employee
                  </button>
                </div>
              </div>

            </form>
          </div>

          {/* RIGHT SIDE: HELPER PANELS (1 Column) */}
          <div className="space-y-6">
            
            {/* Quick Tips Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-3">
              <div className="flex items-center space-x-2 text-amber-500">
                <Lightbulb className="w-4 h-4 fill-amber-50" />
                <h3 className="text-xs font-bold text-slate-800">Quick Tips</h3>
              </div>

              <ul className="space-y-2.5 text-[11px] text-slate-500 font-medium leading-relaxed">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                  <span>
                    Ensure the <strong className="text-slate-700">Tax ID</strong> matches legal documents to avoid payroll delays.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                  <span>
                    Double-check <strong className="text-slate-700">reporting structure</strong> to automatically trigger onboarding workflows.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                  <span>
                    Start dates must be at least 3 days in the future to allow for IT setup.
                  </span>
                </li>
              </ul>
            </div>

            {/* Onboarding Checklist Card */}
            <div className="bg-indigo-50/40 border border-indigo-100 rounded-2xl p-5 shadow-xs space-y-4">
              <div className="flex items-center space-x-2 text-indigo-600">
                <SlidersHorizontal className="w-4 h-4" />
                <h3 className="text-xs font-bold text-slate-900">Onboarding Checklist</h3>
              </div>

              <div className="space-y-2.5">
                {[
                  { key: 'personalDetails', label: 'Personal Details' },
                  { key: 'contractTerms', label: 'Contract Terms' },
                  { key: 'verifyDocs', label: 'Verify Identity Documents' },
                  { key: 'assignHardware', label: 'Assign Hardware Assets' },
                  { key: 'portalAccess', label: 'Set Up Portal Access' }
                ].map((item) => (
                  <label
                    key={item.key}
                    onClick={() => toggleChecklist(item.key)}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        checklist[item.key]
                          ? 'bg-indigo-600 border-indigo-600 text-white'
                          : 'border-slate-300 bg-white group-hover:border-indigo-400'
                      }`}
                    >
                      {checklist[item.key] && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        checklist[item.key] ? 'text-slate-800 font-bold' : 'text-slate-500'
                      }`}
                    >
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>

              {/* Pro Tip Box */}
              <div className="bg-white/80 border border-indigo-100 rounded-xl p-3 text-[11px] text-indigo-900 leading-relaxed">
                <span className="font-extrabold text-indigo-600 tracking-wider uppercase block text-[9px] mb-0.5">
                  PRO TIP
                </span>
                New employees will receive an automated welcome email once "Create Employee" is clicked.
              </div>
            </div>

            {/* Employee Photo Upload Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                <Camera className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-800">Employee Photo</h4>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Recommended size: 400x400px. Supports JPG, PNG.
                </p>
              </div>

              <button
                type="button"
                className="w-full py-2 bg-slate-50 border border-slate-200 hover:bg-slate-100 rounded-xl text-xs font-bold text-slate-700 transition-colors"
              >
                Upload Avatar
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AddEmployee;