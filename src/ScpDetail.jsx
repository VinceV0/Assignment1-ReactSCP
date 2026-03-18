import {scps} from './Data'
import {useParams} from 'react-router'

export default function ScpDetail(props)
{
    // Set the props based on the scp item
    const {item} = useParams();
    // Find the scp that matches the scp item
    const scp = scps.find(t => t.item === item)

    return(
        <body style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif'}}>
      <div className="flexbox" style={{ textAlign: 'center' }}>
        <div>
          <div style={{paddingBottom: '16vw'}}>
            <div>
            <img className='image' src={scp.imglink} alt={scp.item}/>
            </div>
            <h1><b>Item #:</b>{scp.item}</h1>
            <h2><b>Object Class:</b> {scp.class}</h2>
          </div>

          <h3>Special Containment Procedures</h3>
          <p style={{ whiteSpace: 'pre-line' }}>{scp.containment}</p>

          <h3>Description</h3>
          <p style={{ whiteSpace: 'pre-line' }}>{scp.description}</p>
          <br></br><br></br>
        </div>
      <footer style={{ padding: '1vw 5vw', textAlign: 'center', opacity: 0.7 }}>
        <span>
          ©Vince Vagay | 2026
          <a style={{ color: '#000000', paddingLeft: '23vw' }} href="#top">Back to top</a>
        </span>
      </footer>
      </div>
    </body>
    )
}