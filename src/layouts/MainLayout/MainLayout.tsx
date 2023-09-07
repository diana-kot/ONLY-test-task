import React from 'react';

import { MainLayoutInt } from '@/settings/interfaces';

export default function MainLayout({ children, title = '', description = '', enableFooter = true }: MainLayoutInt) {
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <div className="content">{children}</div>
                </div>
            </div>
        </>
    );
}
