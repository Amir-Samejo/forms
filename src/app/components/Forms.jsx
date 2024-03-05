"use client"

import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Pakistan',
    'Saudi Arabia',
    'UAE',
    'Canada',
    'Germany',
    'Italy',
    'England'
];

const tripType = [
    "Single Trip",
    "Multiple Trip"
];

const tripCategory = [
    "Student",
    "Individual",
    "Family"
]

export default function Forms() {
    const [formData, setFormData] = useState({
        personName: [],
        tripTypeValue: '',
        tripCategoryValue: '',
        startDate: null,
        endDate: null,
        selfDOB: null
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (name, date) => {
        console.log(date);
        const dataDate = date.$d.toString()
        console.log(dataDate);
        const newDate = new Date(date);
        const day = newDate.getDate();
        const month = newDate.getMonth() + 1; // Month is zero-indexed, so we add 1
        const year = newDate.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        setFormData({ ...formData, [name]: formattedDate });
        console.log(formattedDate);
    };

    const handleViewQuotation = () => {
        console.log(formData);
    };

    return (
        <div className=''>
            <div className="w-full float-end border-blue-600 rounded-md lg:w-1/2 flex items-center justify-center">
                <div className="max-w-md w-full p-6 border-1">
                    <h1 className="text-3xl font-semibold mb-6 text-black text-center">Travel Insurance</h1>
                    <form action="#" method="POST" className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 text-center border-b-2 pb-4 sm:grid-cols-2">
                            {tripType.map((type) => (
                                <div key={type}>
                                    <label htmlFor={type} className="block w-full cursor-pointer rounded-lg border border-gray-400 p-3 text-gray-600 hover:border-blue-600  has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white">
                                        <input className="sr-only" id={type} type="radio" name="tripTypeValue" value={type} onChange={handleChange} />
                                        <span className="text-base">{type}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center pb-2 sm:grid-cols-3">
                            {tripCategory.map((category) => (
                                <div key={category}>
                                    <label htmlFor={category} className="block w-full cursor-pointer rounded-lg border border-gray-400 p-3 text-gray-600 hover:border-blue-600 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white">
                                        <input className="sr-only" id={category} type="radio" name="tripCategoryValue" value={category} onChange={handleChange} />
                                        <span className="text-sm">{category}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className='flex gap-1'>
                            <div>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker label="Start" name="startDate" value={formData.startDate} onChange={(event) => (handleDateChange("startDate", event)

                                    )} />
                                </LocalizationProvider>
                            </div>
                            <div>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker label="End" name="endDate" value={formData.endDate} onChange={(event) =>
                                        handleDateChange("endDate", event)} />
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div>
                            <FormControl className='w-full'>
                                <InputLabel id="demo-multiple-checkbox-label">Select Countries / Group</InputLabel>
                                <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    name="personName"
                                    value={formData.personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput label="Select Countries / Group" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={formData.personName.indexOf(name) > -1} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Self Date of Birth" className="w-full" name="selfDOB" value={formData.selfDOB} onChange={(event) => handleDateChange("selfDOB", event)} />
                            </LocalizationProvider>
                        </div>
                        <div>
                            <button type="button" onClick={handleViewQuotation} className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition-colors duration-300">View Quotation</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
