"use client";
import { Autocomplete, TextField } from "@mui/material";
// import { ToWords } from "to-words";
// import AutoImage from "@public/assets/side-image/autoside.svg";
// import Image from "next/image";
import React, { useState } from "react";

const carBrand = [
    "Suzuki",
    "Toyota",
    "Honda",
    "KIA",
    "Peugeot",
    "Hyundai",
    "Changan",
    "MG",
    "Proton",
    "Haval",
    "DFSK",
    "Audi",
    "Prince",
    "Isuzu",
    "BMW",
    "Porsche",
    "Chery",
    "Chevrolet",
    "Chrysler",
    "Daehan",
    "Daihatsu",
    "Dodge",
    "Ford",
    "GMC",
    "GUGU",
    "JAC",
    "JMC",
    "Jaguar",
    "Jeep",
    "Lamborghini",
    "Lexus",
    "FORD",
    "Volkswagen",
    "Mercedes",
    "Maserati",
    "Mazda",
    "Mitsubishi",
    "Nissan",
    "Opel",
    "Skoda",
    "SsangYong",
    "Subaru",
    "Tesla",
    "United",
    "Volvo",
    "Buick",
    "BAIC",
    "Bentley",
    "Bugatti",
];

const carModel = {
    Toyota: ["Corolla", "Camry", "Prius"],
    Honda: ["Civic", "Accord", "CR-V"],
    Suzuki: ["Swift", "Ciaz", "Vitara"],
};

const carYear = [
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
    "2007",
    "2006",
    "2005",
];

function Travel() {
    const [filteredModels, setFilteredModels] = useState([]);
    const [converter, setConverter] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        tel: "",
        email: "",
        carBrand: "",
        carModel: "",
        carYear: "",
        carValue: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value, }));

        setFormData({ ...formData, [e.target.name]: e.target.value });

        if (name === "carValue" && !isNaN(value) && value !== "") {
            const words = toWords.convert(value, { currency: true });
            setConverter(words);
        } else {
            setConverter("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...formData });
    };

    // Number Convert Into Text
    // const toWords = new ToWords({
    //     localeCode: "en-IN", // For Indian English
    //     converterOptions: {
    //         currency: true,
    //         ignoreDecimal: false,
    //         ignoreZeroCurrency: false,
    //         doNotAddOnly: false,
    //         currencyOptions: {
    //             name: "Rupee",
    //             plural: "Rupees",
    //             symbol: "₹",
    //             fractionalUnit: {
    //                 name: "Paisa",
    //                 plural: "Paise",
    //                 symbol: "",
    //             },
    //         },
    //     },
    // });
    return (
        <>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 items-center mx-4 md:mx-8 lg:mx-28 my-10">
                {/* Image Section */}
                <div className="hidden lg:block xl:block mx-auto">
                    {/* <Image src="/" alt="side_bg" /> */}
                </div>
                {/* Form Section  */}
                {/* <div className="max-w-md  bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 "> */}
                <div className="max-w-sm m-auto bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4 drop-shadow-2xl">
                    <form onSubmit={(e) => handleSubmit(e, formData)}>
                        <div className="flex gap-2 w-full">
                            {/* Full-Name  */}
                            <TextField
                                name="name"
                                value={formData.name}
                                label="Your Full Name"
                                id="outlined-size-small"
                                defaultValue=""
                                size="medium"
                                fullWidth
                                onChange={handleChange}
                            />

                            {/* Phone Number  */}
                            <TextField
                                name="tel"
                                value={formData.tel}
                                type="number"
                                label="Phone Number"
                                id="outlined-size-small"
                                defaultValue=""
                                size="medium"
                                fullWidth
                                onChange={handleChange}
                            />
                        </div>
                        {/* Email  */}
                        <TextField
                            name="email"
                            value={formData.email}
                            type="email"
                            label="Email"
                            id="outlined-size-small"
                            defaultValue=""
                            size="medium"
                            fullWidth
                            sx={{ marginTop: 2, marginBottom: 2 }}
                            onChange={handleChange}
                        />

                        {/* Car-Brand  */}
                        <Autocomplete
                            options={carBrand}
                            onChange={(e, value) => {
                                handleChange({ target: { name: "carBrand", value } });
                                setFilteredModels(carModel[value] || []);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Car Brand"
                                    size="medium"
                                    name="carBrand"
                                    value={formData.carBrand}
                                    variant="outlined"
                                    fullWidth
                                    sx={{ marginBottom: 2 }}
                                />
                            )}
                        />
                        {/* Car-Model  */}
                        <Autocomplete
                            options={filteredModels}
                            onChange={(e, value) => {
                                handleChange({ target: { name: "carModel", value } });
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Car Model"
                                    size="medium"
                                    name="carModel"
                                    value={formData.carModel}
                                    variant="outlined"
                                    fullWidth
                                    sx={{ marginBottom: 2 }}
                                />
                            )}
                        />

                        {/* Car-Manufacturing-Year  */}
                        <Autocomplete
                            options={carYear}
                            onChange={(e, value) => {
                                handleChange({ target: { name: "carYear", value } });
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Manufacturing Year"
                                    size="medium"
                                    name="carYear"
                                    value={formData.carYear}
                                    variant="outlined"
                                    fullWidth
                                    sx={{ marginBottom: 2 }}
                                />
                            )}
                        />

                        {/* Current-Value  */}
                        {/* <div className="mb-4 relative">
                            <TextField
                                name="carValue"
                                value={formData.carValue}
                                type="number"
                                label="Enter Current Value"
                                id="outlined-size-small"
                                defaultValue=""
                                size="medium"
                                fullWidth
                                onChange={handleChange}
                            />
                            <p className="text-xs text-blue-500 font-sans mx-1 mt-1">
                                {converter}
                            </p>
                        </div> */}

                        {/* Button-View-Quotes  */}
                        <div className="flex items-center justify-between">
                            <button
                                className=" w-full bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 hover:scale-95 transition-all text-white  py-2 px-4 rounded "
                                type="submit"
                            >
                                View Quotes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Travel;