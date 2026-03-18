import {Link} from 'react-router'
import {scps} from './Data'
import Home from './Home'

export default function Nav()
{
    return(
        <nav>
            <Link to="/Home" className="home trapezium"><h3>Home</h3></Link>
            {/* Loop through scp items and create a link for each */}
            {
                // Used Google Gemini to give the drop down menu for subjects - Vince
                <div className="dropdown">
                    {/* Toggle menu */}
                    <input type="checkbox" id="menu-toggle" style={{ display: 'none' }} />
                    <label htmlFor="menu-toggle" className="click-off-backdrop"></label>
                    {/* The button that the user clicks */}
                    <label htmlFor="menu-toggle" className="scplabel trapezium" style={{ cursor: 'pointer', display: 'block', marginTop: '1vw' }}>
                        <h3>SCP Subjects</h3>
                    </label>

                    {/* 3. The dropdown container */}
                    <div className="popup-menu">
                        {scps.map(scp => (
                        <div key={scp.item}>
                            <Link to={`/scp/${scp.item}`} className="trapezium">
                            <h3>{scp.item}</h3>
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>
            }
        </nav>
    )
}