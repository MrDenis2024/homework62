import {useState} from 'react';

import myPhoto from '../../assets/myphoto.jpg';

const AboutUs = () => {
  const [education] = useState([
    {id: '1', year: '2004-2015', place: 'Гуманитрано правовая гимназия №4'},
    {id: '2', year: '2015-2016', place: 'Пермский институт экономики и финансов'},
    {id: '3', year: '2016-2017', place: 'Пермский государственно национально исследовательский университет'},
    {id: '4', year: '2017-2020', place: 'Кыргызско-Российский славянский университет'},
    {id: '5', year: '2023-наст.время', place: 'Attractor school'},
  ]);

  const [work] = useState([
    {id: '1', year: 'июнь 2016 - сентябрь 2017:', place: 'Пекарня "Provance" г.Пермь пекарь-фасовщик;'},
    {id: '2', year: 'декабрь 2018 - январь 2019:', place: 'Оператор колл-центра г.Бишкек;'},
    {id: '3', year: 'октябрь 2020 - октябрь 2021:', place: 'Учебный центр министерства финансов КР Оператор ЭВМ;'},
    {id: '4', year: 'октябрь 2021 - январь 2024:', place: 'Учебный центр министерства финансов КР Специалист по учебно-методической работе;'},
  ]);

  return (
    <div className="my-5 w-50 mx-auto border rounded p-4">
      <div className='text-center'>
        <h1 className="mb-4">Хрунёв Денис Олегович</h1>
        <img src={myPhoto} alt="" className="w-25 rounded"/>
        <p className="mt-4">Год рождения: 09 июля 1997г.</p>
      </div>
      <div className='mt-5'>
        <h4 className='text-center mb-3'>Образование</h4>
        <table className="table table-bordered">
          <thead>
            <tr className='text-center'>
              <th>Год</th>
              <th>Место обучение</th>
            </tr>
          </thead>
          <tbody>
          {education.map((item) => (
            <tr key={item.id}>
              <th className='text-nowrap'>{item.year}</th>
              <td>{item.place}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div>
        <h4 className='text-center mb-3'>Профессиональный опыт</h4>
        {work.map((item) => (
          <p key={item.id}>{item.year} <strong>{item.place}</strong></p>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;