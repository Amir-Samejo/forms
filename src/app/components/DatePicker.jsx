"use client"

import * as React from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Date() {
    const [value, setValue] = React.useState(null);

    const onChange = (newValue) => {
        setValue(newValue);
        const month = String(newValue.month() + 1).padStart(2, '0'); // Zero-pad month
        const day = String(newValue.date()).padStart(2, '0'); // Zero-pad day
        const year = newValue.year();

        console.log(`Date: ${month}/${day}/${year}`);
    }


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker value={value} onChange={onChange} />
            </DemoContainer>
        </LocalizationProvider>
    );
}