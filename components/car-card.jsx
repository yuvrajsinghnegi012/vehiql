"use client";

import React, {useState} from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { CarIcon, Heart } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge';
import { useRouter } from 'next/navigation';

const CarCard = ({ car }) => {
    const [isSaved, setIsSaved] = useState(car.wishlisted);
    const router = useRouter();

    const handleToggleSaved = async (e) =>{}

    return (
        <Card className="overflow-hidden hover:shadow-lg transition group py-0">
            <div className="relative h-48">
                {car.images && car.images.length > 0 ? (
                    <div className="relative w-full h-full">
                        <Image
                            src={car.images[0]}
                            alt={`${car.make}} ${car.model}`}
                            fill
                            className="object-cover group-hover:scale-105 transition duration-300"
                        />
                    </div>
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <CarIcon className="w-full h-full text-gray-400" />
                    </div>
                )}

                <Button
                    varient="ghost"
                    size="icon"
                    className={`absolute top-2 right-2 bg-white/90 rounded-full p-1.5 cursor-pointer ${isSaved ? "text-red-500 hover:text-red-600 " : "text-gray-500 hover:text-gray-900 "}`}
                    onClick={handleToggleSaved}
                >
                    <Heart className={isSaved ? "fill-current" : "" } size={20}/>
                </Button>
            </div>

            <CardContent className="p-4">
                <div className="flex flex-col mb-2"> 
                    <h3 className="text-lg font-bold line-clamp-1">{car.make} {car.model}</h3>
                    <span className="text-xl font-bold text-blue-600">${car.price.toLocaleString()}</span>
                </div>

                <div className="text-gray-600 mb-2 flex items-center">
                    <span>{car.year}</span>
                    <span className="mx-2">•</span>
                    <span>{car.transmission}</span>
                    <span className="mx-2">•</span>
                    <span>{car.fuelType}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="">{car.bodyType}</Badge>
                    <Badge variant="outline" className="">{car.mileage.toLocaleString()} miles</Badge>
                    <Badge variant="outline" className="">{car.color}</Badge>
                </div>

                <div className="flex justify-between cursor-pointer">
                    <Button className="flex" onClick={()=>router.push(`/car/${car.id}`)}>View Car</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CarCard