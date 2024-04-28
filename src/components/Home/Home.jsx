import React from 'react';
import { Button } from 'react-bootstrap';

export default function Home() {
  const dummy = [
    {
      date: '2nd April',
      To: 'Ram Mandir, Ayodhya',
      From: 'Cuttack, Odisha',
      Distance: '1141 km',
      Price: '₹ 3600'
    },
    {
      date: '6th April',
      To: 'Rameswaram, TamilNadu',
      From: 'Cuttack, Odisha',
      Distance: '1801 km',
      Price: '₹ 6000'
    },
    {
      date: '10th April',
      To: 'Dwarika, Gujurat',
      From: 'Cuttack, Odisha',
      Distance: '2275 km',
      Price: '₹ 8000'
    },
    {
      date: '14th April',
      To: 'Kedarnath, Uttarakhand',
      From: 'Cuttack, Odisha',
      Distance: '1329 km',
      Price: '₹ 4000'
    },
    {
      date: '18th April',
      To: 'Jagannath Dham, Puri',
      From: 'Cuttack, Odisha',
      Distance: '84 km',
      Price: '₹ 30'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="text-center">
          <h2 className='text-2xl font-serif font-bold md:text-4xl'>Tours</h2>
          <table className="table-auto mx-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">To</th>
                <th className="px-4 py-2">From</th>
                <th className="px-4 py-2">Distance</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {dummy.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{item.date}</td>
                  <td className="px-4 py-2">{item.To}</td>
                  <td className="px-4 py-2">{item.From}</td>
                  <td className="px-4 py-2">{item.Distance}</td>
                  <td className="px-4 py-2">{item.Price}</td>
                  <td className="px-4 py-2"><Button className='p-2 bg-cyan-400 text-white' onClick={() => alert('Brought successfully, You will get the ticket via email in 24 hrs')}>Buy Tickets</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <style>
        {`.footer-images {
          display: none;
        }`}
      </style>
    </div>
  );
}
