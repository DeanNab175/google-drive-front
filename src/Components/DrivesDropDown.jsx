const DrivesDropDown = ({driveEmail, handleDriveEmailChange}) => {
    const drivesEmail = [
        "3dsmax.mayacryeng@gmail.com",
        "3dsmax2015.automotive@gmail.com",
        "a.cssdev@gmail.com",
        "a.marketing175@gmail.com",
        "angular.completeguide2@gmail.com",
        "angular.completeguide@gmail.com",
        "coursetro175@gmail.com",
        "csharp.unity175@gmail.com",
        "dev.csharp175@gmail.com",
        "dev.php175@gmail.com",
        "dev.sql175@gmail.com",
        "ethicalh14@gmail.com",
        "f.jscript@gmail.com",
        "game2d.unity2@gmail.com",
        "game2d.unity@gmail.com",
        "js.advconcept@gmail.com",
        "js.completewebdev2@gmail.com",
        "js.completewebdev@gmail.com",
        "js.node175@gmail.com",
        "js.node176@gmail.com",
        "js.webprojects175@gmail.com",
        "js.webprojects176@gmail.com",
        "jscourse27@gmail.com",
        "jscourse7@gmail.com",
        "unity.ultimateguide@gmail.com",
        "unitydudemy@gmail.com",
        "web.coder175@gmail.com",
        "wordpr3ss.dev@gmail.com",
        "zbr.qstzbr@gmail.com"
    ]
    return (
        <div className="drive-dropdown">
          <select value={driveEmail} onChange={handleDriveEmailChange}>
            {
                drivesEmail.map((email, index) => {
                    return <option key={index} value={email}>{email}</option>
                })
            }
          </select>
        </div>
    )
}

export default DrivesDropDown