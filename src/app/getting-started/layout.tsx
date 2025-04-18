import * as React from 'react';

export default function SummaryLayout({
                                             children
                                         }: {
    children: React.ReactNode;
}) {
    return <div>
        {children}
    </div>;
}
