import React from 'react';


const Header = ({ category, title }) => (
    <div className=" mb-12">
        <p className="text-lg text-gray-600">{category}</p>
        <p className="text-3xl font-extrabold tracking-tight text-slate-900">
            {title}
        </p>
    </div>
);

export default Header;