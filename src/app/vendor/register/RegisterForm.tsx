'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { submitVendorApplication } from './actions';

export default function RegisterForm() {
  const router = useRouter();
  const supabase = createClient();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [serviceArea, setServiceArea] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [primaryIndex, setPrimaryIndex] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      if (files.length + newFiles.length > 4) {
        setError('You can only upload a maximum of 4 images.');
        return;
      }
      setError(null);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => {
      const newFiles = prev.filter((_, i) => i !== index);
      if (primaryIndex === index) {
        setPrimaryIndex(0);
      } else if (primaryIndex > index) {
        setPrimaryIndex(primaryIndex - 1);
      }
      return newFiles;
    });
  };

  const handleNext = () => {
    if (step === 1) {
      if (!name || !description || !category || !serviceArea) {
        setError('Please fill in all fields.');
        return;
      }
    }
    setError(null);
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) {
      setError('Please upload at least one image.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Reorder files so primary is first
      const orderedFiles = [...files];
      const primaryFile = orderedFiles.splice(primaryIndex, 1)[0];
      orderedFiles.unshift(primaryFile);

      // 1. Upload images
      const imageUrls: string[] = [];
      for (const file of orderedFiles) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError, data } = await supabase.storage
          .from('vendor-images')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('vendor-images')
          .getPublicUrl(filePath);

        imageUrls.push(publicUrl);
      }

      // 2. Submit data
      await submitVendorApplication(name, description, category, serviceArea, imageUrls);
      
      // 3. Navigate away
      router.push('/vendors');
      router.refresh();
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred during submission.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-section-gap relative">
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-surface-container-highest -z-10 -translate-y-1/2"></div>
        
        <div className="flex flex-col items-center gap-stack-sm bg-background px-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${step >= 1 ? 'step-completed' : 'bg-surface-container-highest'}`}>
            {step > 1 ? <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check</span> : <span className="font-bold">1</span>}
          </div>
          <span className={`font-micro-label text-micro-label ${step >= 1 ? 'text-primary' : 'text-on-surface-variant'}`}>1. DETAILS</span>
        </div>

        <div className="flex flex-col items-center gap-stack-sm bg-background px-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'step-completed text-white' : step === 2 ? 'border-2 border-primary bg-white text-primary' : 'border-2 border-surface-container-highest bg-white text-outline-variant'}`}>
            2
          </div>
          <span className={`font-micro-label text-micro-label ${step >= 2 ? 'text-primary' : 'text-on-surface-variant'}`}>2. PORTFOLIO</span>
        </div>
      </div>

      <div className="mb-stack-lg">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-stack-sm">Grow your business with Evenow</h1>
        <p className="text-on-surface-variant font-body-lg">Tell us more about your company to start receiving high-end event inquiries.</p>
      </div>

      <div className="bg-white rounded-2xl p-stack-lg md:p-12 soft-shadow border border-outline-variant/10">
        <form onSubmit={step === 2 ? handleSubmit : (e) => e.preventDefault()} className="space-y-stack-lg">
          
          {error && (
            <div className="bg-red-500/10 text-red-500 p-4 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          {step === 1 && (
            <>
              <div className="space-y-2">
                <label className="font-bold text-on-surface-variant text-sm block">Company Name</label>
                <input required value={name} onChange={e => setName(e.target.value)} className="w-full h-14 px-4 rounded-xl border border-outline-variant bg-surface-container-lowest transition-all duration-200" placeholder="e.g. Majestic Florals & Decor" type="text" />
              </div>

              <div className="space-y-2">
                <label className="font-bold text-on-surface-variant text-sm block">Description</label>
                <textarea required value={description} onChange={e => setDescription(e.target.value)} rows={4} className="w-full p-4 rounded-xl border border-outline-variant bg-surface-container-lowest transition-all duration-200 resize-none" placeholder="Describe your business and what makes your services unique..."></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                <div className="space-y-2">
                  <label className="font-bold text-on-surface-variant text-sm block">Category</label>
                  <div className="relative">
                    <select required value={category} onChange={e => setCategory(e.target.value)} className="w-full h-14 px-4 rounded-xl border border-outline-variant bg-surface-container-lowest appearance-none transition-all duration-200">
                      <option disabled value="">Select a category</option>
                      <option value="Venue">Venue</option>
                      <option value="Catering">Catering</option>
                      <option value="Photography">Photography</option>
                      <option value="Music & Entertainment">Music & Entertainment</option>
                      <option value="Decor & Floral">Decor & Floral</option>
                      <option value="Event Planning">Event Planning</option>
                      <option value="Production">Production</option>
                      <option value="Mixology">Mixology</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-on-surface-variant text-sm block">Service Area</label>
                  <input required value={serviceArea} onChange={e => setServiceArea(e.target.value)} className="w-full h-14 px-4 rounded-xl border border-outline-variant bg-surface-container-lowest transition-all duration-200" placeholder="e.g. Greater London, NYC Metro" type="text" />
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="font-bold text-on-surface-variant text-sm block">Portfolio Images</label>
                <p className="text-xs text-outline mb-2">Upload up to 4 high-resolution images of your best work. Select one as your primary showcase image.</p>
              </div>
              <label htmlFor="fileInput" className="border-2 border-dashed border-primary/20 bg-primary-fixed/10 rounded-2xl py-12 flex flex-col items-center justify-center group hover:border-primary/50 transition-all cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white soft-shadow flex items-center justify-center text-primary mb-stack-md group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'wght' 300" }}>cloud_upload</span>
                </div>
                <p className="font-bold text-primary">Upload your portfolio</p>
                <p className="text-on-surface-variant text-sm">Click to browse files (up to {4 - files.length} remaining)</p>
                <input onChange={handleFileChange} className="hidden" id="fileInput" multiple type="file" accept="image/*" disabled={files.length >= 4} />
              </label>

              {files.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {files.map((file, idx) => (
                    <div key={idx} className={`aspect-square rounded-lg relative overflow-hidden group border-2 ${primaryIndex === idx ? 'border-primary' : 'border-transparent'}`}>
                      <img src={URL.createObjectURL(file)} alt={`Upload preview ${idx}`} className="w-full h-full object-cover" />
                      
                      {/* Set Primary Button */}
                      <button 
                        type="button" 
                        onClick={() => setPrimaryIndex(idx)} 
                        className={`absolute bottom-2 left-2 text-xs font-bold px-2 py-1 rounded shadow ${primaryIndex === idx ? 'bg-primary text-white' : 'bg-white/80 text-primary opacity-0 group-hover:opacity-100'}`}
                      >
                        {primaryIndex === idx ? 'Primary' : 'Set Primary'}
                      </button>

                      {/* Remove Button */}
                      <button type="button" onClick={() => removeFile(idx)} className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-sm">close</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          <div className="mt-stack-lg flex flex-col md:flex-row items-center justify-between gap-stack-md">
            {step === 2 && (
              <button type="button" onClick={() => setStep(1)} disabled={loading} className="w-full md:w-auto px-10 h-14 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary-fixed transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">arrow_back</span>
                Back
              </button>
            )}
            {step === 1 && <div />} 
            <button type="button" onClick={step === 1 ? handleNext : handleSubmit} disabled={loading} className="w-full md:w-auto px-12 h-14 rounded-full step-completed text-white font-bold hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50">
              {loading ? 'Submitting...' : (step === 1 ? 'Next Step' : 'Submit Application')}
              {!loading && <span className="material-symbols-outlined">{step === 1 ? 'arrow_forward' : 'check'}</span>}
            </button>
          </div>
        </form>
      </div>

      <p className="text-center text-outline text-sm mt-stack-lg">
        Your data is stored securely. By continuing, you agree to our <a className="text-primary underline" href="#">Privacy Policy</a>.
      </p>
    </div>
  );
}
