import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const options=[
        {
          "id": 1,
          "name": "Iron Paradise Gym",
          "featured": [
            "Exclusive memberships",
            "Cutting-edge equipment",
            "Celebrity trainers",
            "Open 24/7"
          ],
          "price": 50
        },
        {
          "id": 2,
          "name": "FitZone 24/7",
          "featured": [
            "Budget-friendly",
            "24/7 access",
            "Casual fitness environment",
            "Flexible hours"
          ],
          "price": 35
        },
        {
          "id": 3,
          "name": "Strength & Wellness Studio",
          "featured": [
            "Personalized coaching",
            "Strength training focus",
            "Holistic wellness programs",
            "Private sessions"
          ],
          "price": 60
        },
        {
          "id": 4,
          "name": "Urban Fitness Club",
          "featured": [
            "Community-focused",
            "Diverse group classes",
            "Modern facilities",
            "Social atmosphere"
          ],
          "price": 40
        },
        {
          "id": 5,
          "name": "Elite Performance Gym",
          "featured": [
            "High-end performance training",
            "Athletic coaching",
            "Recovery and rehabilitation services",
            "VIP amenities"
          ],
          "price": 70
        }
      ]
      
    return (
        <div>
            <h1>Hello from price options {options.length}</h1>
            {
               options.map(option=><PriceOption key={option.key} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;