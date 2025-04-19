import * as React from 'react';

export default function MealPlanLayout({
                                             children
                                         }: {
    children: React.ReactNode;
}) {
    return <div>
        {children}
    </div>;
}
