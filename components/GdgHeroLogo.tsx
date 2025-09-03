import React from 'react';

const GdgLogoIcon = () => (
    <img 
        src="/GDG-project/assets/gdg-logo.png" 
        alt="GDG Logo" 
        className="mx-auto h-30 w-auto md:h-40"
    />
);


const GdgHeroLogo: React.FC = () => {
    return (
        <div className="text-center mb-8">
            <GdgLogoIcon />
            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-slate-800 dark:text-slate-100">
                Google Developer Group
            </h2>
            <p className="mt-2 text-2xl md:text-3xl font-semibold text-google-blue">
                Gyan Ganga College Of Technology
            </p>
        </div>
    );
};

export default GdgHeroLogo;
