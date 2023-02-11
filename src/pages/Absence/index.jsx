import React from 'react'
import ContentsTable from '../../components/ContentsTable'
import PageContainer from '../../components/PageContainer'
import SearchBar from '../../components/SearchBar'

export default function Absence() {
  const [list, setList] = React.useState([]) 

  const getAbsence = async () => {
    try {
      const data = await fetch('http://localhost:4000/absence', {
        credentials: 'include'
      })
      const absences = await data.json()
      absences.map((absence) => {
        if (absence.mandatory) {
          return (absence.mandatory = 'mandatory')
        } else {
          return (absence.mandatory = 'opitonal')
        }
      })

      setList(absences)
    } catch {
      setList([])
    }
  }
  React.useEffect(() => {
    getAbsence()
  }, [])

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
        <SearchBar />
        <ContentsTable source={list} columns={columns} />
      </PageContainer>
    </div>
  )
}
