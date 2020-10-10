import Head from 'next/head'
import Header from './Header'

const layoutStyle = {


    margin: 20,
    padding: 20,
    border: '1px solid #DDD'


}


const MyLayout = (props) => (
   <div>
   <style jsx>{`
        img {
          border-radius: 4px;
          padding: 5px;
          width:23rem;
          height:20rem;

        }
        body{
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
	<Head>
	   <link
  			rel="stylesheet"
  			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  			crossorigin="anonymous"
		/>
	</Head>
  	<div style={layoutStyle}>
    	<Header />
    	{props.children}
  	</div>
  </div>
)

export default MyLayout
