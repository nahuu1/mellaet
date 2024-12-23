"use client";
import React from "react";

function NewComponent({ title, description, time, services, onServiceClick }) {
  const [selectedService, setSelectedService] = React.useState(null);

  const workersList = {
    Plumber: [
      { name: "Abebe Kebede", distance: "1.2", rating: 4.8 },
      { name: "Tigist Mengistu", distance: "2.1", rating: 4.5 },
      { name: "Dawit Haile", distance: "0.8", rating: 4.9 },
      { name: "Yohannes Tadesse", distance: "3.0", rating: 4.6 },
    ],
    Electrician: [
      { name: "Mulatu Teshome", distance: "1.5", rating: 4.7 },
      { name: "Kidist Gebremichael", distance: "2.3", rating: 4.8 },
      { name: "Solomon Bekele", distance: "1.1", rating: 4.4 },
      { name: "Hanna Desalegn", distance: "2.8", rating: 4.9 },
    ],
    Carpenter: [
      { name: "Ephrem Alemu", distance: "0.9", rating: 4.6 },
      { name: "Meseret Worku", distance: "1.8", rating: 4.7 },
      { name: "Tamrat Negash", distance: "2.5", rating: 4.5 },
      { name: "Bethlehem Assefa", distance: "1.7", rating: 4.8 },
    ],
    Painter: [
      { name: "Getachew Mekonen", distance: "1.4", rating: 4.5 },
      { name: "Senait Tekle", distance: "2.2", rating: 4.7 },
      { name: "Yonas Girma", distance: "1.6", rating: 4.8 },
      { name: "Meron Tadesse", distance: "2.9", rating: 4.6 },
    ],
    Gardener: [
      { name: "Teklu Desta", distance: "1.3", rating: 4.7 },
      { name: "Rahel Gebremariam", distance: "2.4", rating: 4.5 },
      { name: "Zewdu Tilahun", distance: "1.9", rating: 4.8 },
      { name: "Hirut Solomon", distance: "2.7", rating: 4.6 },
    ],
    Cleaner: [
      { name: "Tewodros Berhanu", distance: "1.0", rating: 4.8 },
      { name: "Selamawit Mengistu", distance: "2.0", rating: 4.6 },
      { name: "Mekonnen Abebe", distance: "1.5", rating: 4.7 },
      { name: "Tsehay Wolde", distance: "2.6", rating: 4.5 },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between mb-2">
        <div>
          <h2 className="font-bold">{title}</h2>
          <p>{description}</p>
        </div>
        <span className="text-gray-500">{time}</span>
      </div>
      {services && services.length > 0 && (
        <div className="mb-4">
          <h3 className="font-bold mb-2">Popular Services</h3>
          <div className="grid grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(service.name)}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-50"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#22c55e] bg-opacity-10 rounded-full mb-2">
                  <i
                    className={`fa fa-${service.icon} text-[#22c55e] text-xl`}
                  ></i>
                </div>
                <span className="text-sm text-center">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px] max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl">
                Available {selectedService}s
              </h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="space-y-4">
              {workersList[selectedService].map((worker, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold">{worker.name}</h3>
                      <p className="text-sm text-gray-600">
                        {worker.distance} km away
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">⭐</span>
                      <span>{worker.rating}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onServiceClick({ service: selectedService, worker });
                      setSelectedService(null);
                    }}
                    className="mt-2 w-full bg-[#22c55e] text-white px-4 py-2 rounded hover:bg-[#1ea34b]"
                  >
                    Contact
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function NewComponentStory() {
  const job = {
    title: "Services Available",
    description: "Find skilled workers near you",
    time: "Updated just now",
    services: [
      { name: "Plumber", icon: "wrench" },
      { name: "Electrician", icon: "bolt" },
      { name: "Carpenter", icon: "hammer" },
      { name: "Painter", icon: "paint-roller" },
      { name: "Gardener", icon: "leaf" },
      { name: "Cleaner", icon: "broom" },
    ],
  };

  return (
    <div className="p-4">
      <NewComponent
        title={job.title}
        description={job.description}
        time={job.time}
        services={job.services}
        onServiceClick={(details) =>
          alert(`Selected ${details.worker.name} (${details.service})`)
        }
      />
    </div>
  );
}

export default NewComponent;