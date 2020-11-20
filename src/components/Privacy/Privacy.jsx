import React from "react";
import styles from "./privacy.module.css"

const Privacy = () => {
  return <main id="mainContent">
    <div className={`container ${styles.contentSize}`}>
      <div className="row justify-content-center mt-5 pb-5 p-0">
        <h3>Privacy</h3>
        <p>uPetition will not share the information provided by students (name, email, student number) with any third party other than the University of Ottawa (the University), the University of Ottawa Student Union (UOSU), and our Cloud service provider. The data that is stored in the uPetition database is exclusively the name, email, student number, and the verification status (whether or not the student has clicked on the verification link sent by email) of students who have opted to disclose this information to the uPetition team through the form on the uPetition website.</p>

        <p>uPetition will not utilize this data for any purpose other than to aid in the UOSU petition to the University, as described in the petition text.</p>

        <p>uPetition will maintain this data for at most one calendar year, or on request from UOSU, or until the University has agreed to the demands outlined in the petition text in a manner that is deemed suitable for UOSU, whichever is shorter. After this period, the full petition will be exported into a text format for archival, and all digital data will be deleted to the fullest extent possible under the contract with the Cloud service provider. While the uPetition team cannot guarantee that the data will be completely erased from the Cloud provider services (as the uPetition team does not have physical access to the Cloud provider servers), the uPetition team will ensure that all access to this information will be limited to the best of our abilities and will be inaccessible to the uPetition team through the Cloud provider's portal.</p>

        <p>After the information is exported into paper format for archival, the archival papers will be sealed and delivered to UOSU.</p>

        <p>The uPetition team reserves the right to collect anonymized metadata related to the petition such as, but not limited to, the total number of individuals who have submitted the form on the uPetition website, the total number of verified individuals, and the times at which petition signings have occurred. This data will predominantly be stored in logs and used to enhance the services that the uPetition team will provide for students, such as by providing a running counter of verified signatures on the uPetition website and to determine when the uPetition team needs to scale the resources for hosting the website, as well as for bug fixing. This data may be stored for an indefinite period of time, and used or displayed for promotional purposes at the discretion of members of the uPetition team, including for use not affiliated with uPetition, such as for portfilio use.</p>

        <p>The full source code for the uPetition website for this subdomain is made available on GitHub at https://github.com/taliamax/uosu-petition, and the original uPetition website is available at https://github.com/upetition/Stop-uOttawa-Surveillance. Both of these code repositories can be reviewed at any time.</p>

      </div>
    </div>
  </main>;
}
export default Privacy;
