import { useContext } from 'react'
import { DataContext } from '../../Context/Context'
import './dashboard.css'

const Dashboard = () => {
  const { slider, setSlider } = useContext(DataContext)
  return (
    <main className={`${slider == true ? 'container' : 'grid'}`}>
      <section className="dashboard">
        <h1>Dashboard Page</h1>
      </section>
    </main>
  )
}

export default Dashboard
