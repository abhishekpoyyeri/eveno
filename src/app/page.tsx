"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for fade-in effects
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll("section > div");
    elements.forEach((el) => {
      el.classList.add(
        "transition-all",
        "duration-1000",
        "opacity-0",
        "translate-y-10"
      );
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative min-h-[921px] flex items-center px-margin-mobile md:px-margin-desktop py-stack-lg overflow-hidden">
          <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-stack-lg">
              <span className="font-micro-label text-micro-label text-secondary uppercase tracking-[0.2em]">
                Crafting Moments
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-xl">
                Plan your perfect celebration{" "}
                <span className="text-secondary italic font-normal">
                  effortlessly
                </span>
                .
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                The ultimate orchestration platform for high-end event planners
                and hosts. Discover premium venues and world-class vendors in
                one curated space.
              </p>
              <div className="relative mt-stack-lg max-w-2xl bg-surface-container-lowest p-2 md:p-3 rounded-3xl shadow-lg border border-outline-variant flex flex-col md:flex-row items-center">
                <div className="flex-1 w-full px-6 border-b md:border-b-0 md:border-r border-outline-variant py-4 md:py-2">
                  <label className="block font-micro-label text-[10px] text-outline uppercase tracking-wider">
                    Event Type
                  </label>
                  <input
                    className="w-full bg-transparent border-none focus:ring-0 font-body-md text-on-surface p-0 placeholder:text-outline-variant"
                    placeholder="Wedding, Gala, Party..."
                    type="text"
                  />
                </div>
                <div className="flex-1 w-full px-6 border-b md:border-b-0 md:border-r border-outline-variant py-4 md:py-2">
                  <label className="block font-micro-label text-[10px] text-outline uppercase tracking-wider">
                    Location
                  </label>
                  <input
                    className="w-full bg-transparent border-none focus:ring-0 font-body-md text-on-surface p-0 placeholder:text-outline-variant"
                    placeholder="New York, London..."
                    type="text"
                  />
                </div>
                <div className="flex-1 w-full px-6 py-4 md:py-2">
                  <label className="block font-micro-label text-[10px] text-outline uppercase tracking-wider">
                    Date
                  </label>
                  <input
                    className="w-full bg-transparent border-none focus:ring-0 font-body-md text-on-surface p-0"
                    type="date"
                  />
                </div>
                <div className="w-full md:w-auto px-4 pb-4 md:pb-0 md:pr-2">
                  <button className="w-full bg-primary text-on-primary p-4 rounded-2xl flex items-center justify-center transition-transform active:scale-95">
                    <span className="material-symbols-outlined">search</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4 h-[600px] perspective-container">
              <div className="space-y-4 pt-12">
                <div
                  className="h-80 w-full rounded-3xl overflow-hidden hover-lift border-4 border-white shadow-sm bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdX-NI2m2tczSfi45pq77vkyqN11hkAkNDRSdjHRbm4beddXn5lUX5VcA-GLln-5xM4Z4nxv4dy2Cni6VWhyRZjpS0E3AS8wDt6rpGGy7Vj8YNZ3pTHDvV8pVLXVBK0L1Hv7oONkBVQSgkL5hIToOXXywA1FBEt1NJtO15CWRapUk9svvsnPLo1Eegb1LXOgwCIlRSysJRx9A1LuKAJQ5BIrVTlTFdvHaJ12ugq0CFfra5eG3g4J7wf5TM4UBq0jXz-m5RCm76tfE')",
                  }}
                ></div>
                <div
                  className="h-64 w-full rounded-3xl overflow-hidden hover-lift border-4 border-white shadow-sm bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSzLZTuhbc1TWML3OFg_WBOu-pc3sFtqja-fBU5RKO_YanWS3DxPPBhOzX2uKsS7euYADfLoAmwjT2a6ZeO6-SUH0oeK-EnQv24G8A6mH0BZhLuttDPE6-h5tlITveNy13Ysp2yxHtthbegOi0YBZgjjOGNuLhkUt-SMEfzEkcmbXOSEMW2OyBl9Fn0HDwmm_XrLuH3iVbmDkot8mQzBtzjH4JIRdPi1Vo_xhQMXb2TKN8KpvjvdOqVtbkgFsbRZSN-I4b-QUbMv8')",
                  }}
                ></div>
              </div>
              <div className="space-y-4">
                <div
                  className="h-64 w-full rounded-3xl overflow-hidden hover-lift border-4 border-white shadow-sm bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOA0dK4CLrAfB54ROU0Qp_H8yTU9ZBnPYzPV1z8ofeVwJfvUy1EJaGfWHPleICypsXjsZRUflwN7KSGMrvIDOo-54LOqjOL8bu_8ps87ZgKwu5NJSNVca_nFgxgoRpI5OZs8DQJPHjsGQzQlJBSJG8cGh0nrjOdvRLQ0J7Ct4Bg4dUlwcaNTky9ZlF0CKAFG0rFlVmoZZqVVB4FY93tYir-OJmMhu3qzCQy9hLUBB0mUa4t5khfOp-MMcMjlPNonoNSQ5AjLfA1yE')",
                  }}
                ></div>
                <div
                  className="h-80 w-full rounded-3xl overflow-hidden hover-lift border-4 border-white shadow-sm bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9Sj0RQ7IPhM8Ze1SoEOv2Hocqj-XZskSHF1-AUBBaoaahLSuugDk4SHRRWF5pc8T9DbAg3wqnxJyGejZJf4RyQyXKP_qnBdLiARDKq2R6goxFKxZGPs1V0sVH9jWJF5Qmo0lI1pSTklz7DmdLenhC3-3bn2_YVl9MKMqqmac3WizcmnAJ9YoN6Xqsc-h3rWVUDo71fTktVpzsZuzXqbG6JLRuXYgtnpProR5EaxSjWInv0rLuUldDhQsYjxlKogBHhpcBiVaOrJk')",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-2/3 h-full -z-10 opacity-30 pointer-events-none"></div>
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="font-micro-label text-micro-label text-secondary uppercase tracking-[0.2em]">
                Curated Excellence
              </span>
              <h2 className="font-display-lg text-headline-md md:text-display-lg text-primary mt-2">
                Explore top-tier services
              </h2>
            </div>
            <button className="flex items-center gap-2 font-body-md text-primary font-bold hover:text-secondary transition-colors">
              View All Categories{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative h-96 rounded-3xl overflow-hidden hover-lift cursor-pointer shadow-sm">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZICYqgPyBZAM3F7lM8PC5Squ8y3rxStBVromVoFpaC9mQXoJT1U6sJVyFqxj7fS7aRmymYd7w_kDhT_-JlJZD3ViPqsthrWT4FY29QFqh5DkSzLWN39u_78XvFC0ARdPdXjM3iti2qm5pqlhYMjIWezg5AdUo17Q259f8iOB6GxrN-w4Md_lBpK-wGNBEtFUn0tbFP756bbKtLjGn8lNb_j2suwTqy9eqzAFzLXgJdSsf22KltWH4-Ddt0XvInRE3lcBb3bM8shA')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-2xl border border-white/20">
                <p className="font-headline-md text-primary-container text-lg">
                  Venues
                </p>
                <p className="font-body-md text-on-surface-variant text-sm mt-1">
                  240+ Curated Spaces
                </p>
              </div>
            </div>
            <div className="group relative h-96 rounded-3xl overflow-hidden hover-lift cursor-pointer shadow-sm lg:translate-y-12">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoaQ_MjxAF83CT82Dq31I2yE-VLCXwcKtRceaMYKY1o6gv8LrHZJsbaMhBOS8qqzLiBfIEustNz1JEyTDZXOQuDFskEna7lYlKISFRe7sinoV0v08tLGK0CD_LGCXodjamrLvmEU3wtS1fgMS-UowHbMVjVAr4BIHvjS9N4IzaokmhqzIWIsQPIiuG7_Mr-UfF17YAqGcl1ZxsLJkCtfBjOkTQJuNA4XPbhALxG_AEf4qhq2jya1LGMqzB16zJQHu4gOUW278aMPE')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-2xl border border-white/20">
                <p className="font-headline-md text-primary-container text-lg">
                  Catering
                </p>
                <p className="font-body-md text-on-surface-variant text-sm mt-1">
                  Culinary Masters
                </p>
              </div>
            </div>
            <div className="group relative h-96 rounded-3xl overflow-hidden hover-lift cursor-pointer shadow-sm">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJ0WQlo6nMKXk1RgxArT74UdUsEhrmdKFSLOgYdDdYPYJ9imeiebNrFfQ-LwiOXRQ71rWkT-XLoGulZ-IKRsk4EHgQkmSHTKMqhbsZv-V9vdEBELqnaxgvsB4W5Ed_rtW2wo77Zet2vl2p0TY1LNAGbIvlvI9jYA2C3oszPtpi_NtO9aSTDjlg6phf7G6rCDtZVuO3uaRrtnKua8dP1wEcdb3QbosSVoTSXmd9dHbddkhZ281xA-rs2SR5cD__t38iPG_YZFSUUOc')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-2xl border border-white/20">
                <p className="font-headline-md text-primary-container text-lg">
                  Decoration
                </p>
                <p className="font-body-md text-on-surface-variant text-sm mt-1">
                  Visual Artistry
                </p>
              </div>
            </div>
            <div className="group relative h-96 rounded-3xl overflow-hidden hover-lift cursor-pointer shadow-sm lg:translate-y-12">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3fdPUPQuCfvKVl5x0rQE59JmutNRU8Hgfo7OgEMwDq4KeTPcd9i4F0a1Np8FG9SpdXSZA7D7PaVbz90gBMpYLPf-lxdp7_zVJPDZQpqSuKbgUZFmyYZ8ApkAg9Ad4n3VQAOn8IgRUF9nxwUWWveErmtVZe3H5aewzF601j7oBsqsvhfGU5GYaJNpKR7Y40x-3a-bfYEk9vQlOL4FVW1PcoonNWFGkoKuxEpv3q6Ttz2vrz5yksUCrDz4iKoTBsqcM8CCB37GcGPM')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-2xl border border-white/20">
                <p className="font-headline-md text-primary-container text-lg">
                  Photography
                </p>
                <p className="font-body-md text-on-surface-variant text-sm mt-1">
                  Eternal Memories
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap bg-surface-container-low mt-12 overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <span className="font-micro-label text-micro-label text-primary uppercase tracking-[0.4em] opacity-60">
              HOW IT WORKS
            </span>
            <h2 className="font-display-lg text-headline-md md:text-display-lg text-primary mt-4 mb-16">
              Four steps to your dream event
            </h2>
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 timeline-track">
              <div className="relative z-10 space-y-4 group">
                <div className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto text-headline-md font-bold transition-transform group-hover:rotate-12">
                  1
                </div>
                <h3 className="font-headline-md text-primary">Discover</h3>
                <p className="font-body-md text-on-surface-variant px-4">
                  Browse our curated collection of venues and services tailored
                  to your taste.
                </p>
              </div>
              <div className="relative z-10 space-y-4 group">
                <div className="w-16 h-16 bg-secondary text-on-primary rounded-full flex items-center justify-center mx-auto text-headline-md font-bold transition-transform group-hover:-rotate-12">
                  2
                </div>
                <h3 className="font-headline-md text-primary">Customize</h3>
                <p className="font-body-md text-on-surface-variant px-4">
                  Directly message vendors and customize packages to fit your
                  vision perfectly.
                </p>
              </div>
              <div className="relative z-10 space-y-4 group">
                <div className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto text-headline-md font-bold transition-transform group-hover:scale-110">
                  3
                </div>
                <h3 className="font-headline-md text-primary">Secure</h3>
                <p className="font-body-md text-on-surface-variant px-4">
                  Book and pay securely through our encrypted orchestration
                  platform.
                </p>
              </div>
              <div className="relative z-10 space-y-4 group">
                <div className="w-16 h-16 bg-secondary text-on-primary rounded-full flex items-center justify-center mx-auto text-headline-md font-bold transition-transform group-hover:rotate-12">
                  4
                </div>
                <h3 className="font-headline-md text-primary">Celebrate</h3>
                <p className="font-body-md text-on-surface-variant px-4">
                  Enjoy your seamlessly managed event while we handle the
                  logistics.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto relative overflow-hidden rounded-[3rem] bg-secondary-container p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 group">
            <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-white opacity-10 blur-3xl rotate-45 pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl text-center md:text-left">
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-secondary-container">
                Start planning your event today
              </h2>
              <p className="font-body-lg text-body-lg text-on-secondary-container/90 mt-6 max-w-lg">
                Whether you are hosting a private gala or looking to list your
                venue, Eveno provides the tools for effortless orchestration.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-stack-lg">
                <button className="w-full sm:w-auto px-10 py-5 bg-on-background text-white rounded-full font-bold text-lg hover-lift shadow-xl">
                  Get Started Now
                </button>
                <button className="w-full sm:w-auto px-10 py-5 bg-white/20 backdrop-blur-md text-on-secondary-container border border-white/30 rounded-full font-bold text-lg hover:bg-white/30 transition-colors">
                  Join as a Vendor
                </button>
              </div>
            </div>
            <div className="relative z-10 hidden lg:block w-96 h-96 group-hover:scale-105 transition-transform duration-700">
              <div
                className="w-full h-full rounded-3xl overflow-hidden border-8 border-white/20 shadow-2xl rotate-3 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaHg2fxyZnh8eYu-JS-N2Iw-Ngj5mBcD2PzO7FpHhCDtsvFDZMryJm-bophaOquNE9Piw4BHpqlgCnFqgxDRBTMjncZ-EeFaE2UDr6dSNcAoV74882RqZLjaxJFKxQxetJ8aWOEEET4bywZfPxIhHcVtZUHJQBpnWvrWt-yyJpQM914pcanhVKPTwIdEA-PAt84GTGmHPKHuyGuzQJqzvNsIm47NwxBA7JpWHCml85C9B0ZLBZGz4y2k2K7PDXb0RMmrCE4dwlRSk')",
                }}
              ></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
