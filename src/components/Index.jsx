import hero from '../images/hero2-feb-21-desk.avif'

export const App = ({title}) => {
  return (
    <>
    <h1 style={{margin: "20px"}}>{title}</h1>
    <img style={{width: "100%"}} src={hero} alt="" />
    </>
  )
}
