import React from 'react';

import { render  , screen} from "@testing-library/react";

import Contact from "../Contact"

import "@testing-library/jest-dom";

test('Should load contact us component', () =>{

    render(<Contact />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();

});

test('Should load para of contact us components', () =>{
    render(<Contact />);

    const para = screen.getByRole('paragraph');

    expect(para).toBeInTheDocument();
})