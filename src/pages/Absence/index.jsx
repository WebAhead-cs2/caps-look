import React from 'react'
import ContentsTable from '../../components/ContentsTable'
import PageContainer from '../../components/PageContainer'
import SearchBar from '../../components/SearchBar'

export default function Absence() {
  const [list, setList] = React.useState([]); // list of absences useState
  

const getAbsence = async ()=>{
  try{
  const data = await fetch('http://localhost:4000/absence')
  const absences = await data.json()
  absences.map((absence) =>{
    if (absence.mandatory){
      return absence.mandatory = "mandatory"
    }else{
      return absence.mandatory = "opitonal"
    }
    
  });

  setList(absences)
  
  }catch{
    setList([])
  }
}
React.useEffect(() => {
  getAbsence();
}, []);


const columns = [
  { title: 'absence', dataIndex: 'absence_name' },
  { title: 'site', dataIndex: 'site_name' },
  { title: 'country', dataIndex: 'country_name' },
  { title: 'start date', dataIndex: 'absence_start_date' },
  { title: 'end date', dataIndex: 'absence_end_date' },
  { title: 'mandatory/optional', dataIndex: 'mandatory' }
]


  return (
    <div>
      <PageContainer name={'Absences'}>
      <SearchBar/>
      <ContentsTable source={list} columns={columns} />
      </PageContainer>
    </div>
  )
}

// const data = [
//   {
//     "absence_name": "Christmas",
//     "site_name": "Nazareth",
//     "country_name": "israel",
//     "absence_start_date": "2023-12-25",
//     "absence_end_date": "2023-12-31",
//     "mandatory": true
//   },
//   {
//     "absence_name": "Christmas",
//     "site_name": "Rannana",
//     "country_name": "israel",
//     "absence_start_date": "2023-12-25",
//     "absence_end_date": "2023-12-31",
//     "mandatory": true
//   },
//   {
//     "absence_name": "Christmas",
//     "site_name": "Pune",
//     "country_name": "india",
//     "absence_start_date": "2023-12-25",
//     "absence_end_date": "2023-12-31",
//     "mandatory": false
//   },
//   {
//     "absence_name": "Kippur",
//     "site_name": "Nazareth",
//     "country_name": "israel",
//     "absence_start_date": "2023-09-24",
//     "absence_end_date": "2023-09-25",
//     "mandatory": false
//   },
//   {
//     "absence_name": "Kippur",
//     "site_name": "Rannana",
//     "country_name": "israel",
//     "absence_start_date": "2023-09-24",
//     "absence_end_date": "2023-09-25",
//     "mandatory": false
//   },
//   {
//     "absence_name": "Easter",
//     "site_name": "Nazareth",
//     "country_name": "israel",
//     "absence_start_date": "2023-04-09",
//     "absence_end_date": "2023-04-16",
//     "mandatory": true
//   },
//   {
//     "absence_name": "Easter",
//     "site_name": "Rannana",
//     "country_name": "israel",
//     "absence_start_date": "2023-04-09",
//     "absence_end_date": "2023-04-16",
//     "mandatory": true
//   },
//   {
//     "absence_name": "Easter",
//     "site_name": "Pune",
//     "country_name": "india",
//     "absence_start_date": "2023-04-09",
//     "absence_end_date": "2023-04-16",
//     "mandatory": false
//   },
//   {
//     "absence_name": "Diwali",
//     "site_name": "Pune",
//     "country_name": "india",
//     "absence_start_date": "2023-11-10",
//     "absence_end_date": "2023-11-14",
//     "mandatory": true
//   },
//   {
//     "absence_name": "Passover",
//     "site_name": "Nazareth",
//     "country_name": "israel",
//     "absence_start_date": "2023-04-09",
//     "absence_end_date": "2023-04-16",
//     "mandatory": false
//   },
//   {
//     "absence_name": "Passover",
//     "site_name": "Rannana",
//     "country_name": "israel",
//     "absence_start_date": "2023-04-09",
//     "absence_end_date": "2023-04-16",
//     "mandatory": true
//   }
// ]