"use client";

import { useState } from "react";
import { amenities, Amenity } from "@/utils/amenities";
import { Checkbox } from "@/components/ui/checkbox";

interface AmenitiesInputProps {
  defaultValue?: Amenity[];
}

function AmenitiesInput({ defaultValue }: AmenitiesInputProps) {
  const initialAmenities = defaultValue || amenities;

  // Ensuring the selectedAmenities state is an Amenity array
  const [selectedAmenities, setSelectedAmenities] =
    useState<Amenity[]>(initialAmenities);

  const handleChange = (amenity: Amenity) => {
    setSelectedAmenities((prev) => {
      return prev.map((a) =>
        a.name === amenity.name ? { ...a, selected: !a.selected } : a
      );
    });
  };

  return (
    <section>
      <input
        type="hidden"
        name="amenities"
        value={JSON.stringify(selectedAmenities)}
      />
      <div className="grid grid-cols-2 gap-4">
        {selectedAmenities.map((amenity) => (
          <div key={amenity.name} className="flex items-center space-x-2">
            <Checkbox
              id={amenity.name}
              checked={amenity.selected}
              onCheckedChange={() => handleChange(amenity)}
            />
            <label
              htmlFor={amenity.name}
              className="text-sm font-medium leading-none capitalize flex gap-x-2 items-center"
            >
              {amenity.name}
              {/* Ensure that amenity.icon is a valid React component */}
              {amenity.icon && <amenity.icon className="w-4 h-4" />}
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AmenitiesInput;
