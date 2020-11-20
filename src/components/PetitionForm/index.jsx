import React, { useState, useEffect } from "react";
import {
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    Button,
    CircularProgress,
    Snackbar,
    Card
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const PetitionForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [privacyCheck, setPrivacyCheck] = useState(false);
  const [consentCheck, setConsentCheck] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [failText, setFailText] = useState("Something went wrong...");
  const [numSigners, setNumSigners] = useState(0);

  useEffect(() => {
    fetch('/api/count/verified')
    .then(data => {return data.json() })
    .then(res => {
      if (res.verified_count !== undefined) {
        setNumSigners(res.verified_count)
      }
    })
  }, [])

  const enableSubmit = (
    studentNumber !== "" &&
    name !== "" &&
    email !== "" &&
    privacyCheck &&
    consentCheck &&
    !sending
  );

  const handleAlertClose = (type) => (e, r) => {
      if (r === 'clickaway') {
          return;
      }

      type(false);
      setFailText("Quelque chose a mal fonctionné... / Something went wrong...")
  }

  const handleClick = () => {
      setSending(true);
      const queryParams = {
        headers: {
            "Content-Type":"application/json; charset: UTF-8"
        },
        body: JSON.stringify({
            student_name: name,
            student_email: email,
            student_number: studentNumber
        }),
        method: "POST"
      }

      const url = "/api/add/student";

      fetch(url, queryParams)
      .then(data => { return data.json()})
      .then(res => {
        if (res.created) {
          setSuccess(true);
        }
        else if (res.created !== undefined && !res.created) {
          if (res.error !== undefined) {
            setFailText(res.error)
          }
          setFailure(true);
        }
        else {
          setFailText("Quelque chose a mal fonctionné... / Something went wrong...")
          setFailure(true);
        }
      })
      .then(() => setSending(false))
      .catch(error => {
          console.log(error);
          setFailure(true);
          setSending(false);
      })

  };

  return (
    <Card>
      <main>
      <div className="container m-0 p-5">
        <div className="row justify-content-center p-0">
          <span className="p-2">
            <TextField
              required
              label="Nom / Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </span>
          <span className="p-2">
            <TextField
              required
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
          <span className="p-2">
            <TextField
              required
              label="# d'etudiant / Student #"
              value={studentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
            />
          </span>
        </div>
        <div className="row justify-content-left ml-0">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={privacyCheck}
                  onChange={(e) => setPrivacyCheck(e.target.checked)}
                  inputProps={{'aria-label': "J'ai lu et j'accepte la déclaration de confidentialité / I have read and accept the privacy statement"}}
                />
              }
              label="J'ai lu et j'accepte la déclaration de confidentialité / I have read and accept the privacy statement"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={consentCheck}
                  onChange={(e) => setConsentCheck(e.target.checked)}
                  inputProps={{'aria-label': 'Je reconnais que cela constitue un consentement à ajouter mon nom à la pétition / I acknowledge this as consent to add my name to the petition'}}
                />
              }
              label='Je reconnais que cela constitue un consentement à ajouter mon nom à la pétition / I acknowledge this as consent to add my name to the petition'
            />
          </FormGroup>
        </div>
        <div className="row d-flex flex-row-reverse">
            {
              !sending &&
              <Button
                variant="outlined"
                color="primary"
                disabled={!enableSubmit}
                className="justify-right"
                onClick={handleClick}
                >
                Soumettre / Submit
              </Button>

            }
            {
                sending &&
                <CircularProgress />
            }
        </div>
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={handleAlertClose(setSuccess)}
        >
            <Alert onClose={handleAlertClose(setSuccess)} severity="success">
              Vous avez été ajouté avec succès à la pétition ! Vérifiez votre email pour le lien de confirmation / You have been successfully added to the petition! Check your email for the confirmation link
            </Alert>
        </Snackbar>
        <Snackbar
          open={failure}
          autoHideDuration={6000}
          onClose={handleAlertClose(setFailure)}
        >
            <Alert onClose={handleAlertClose(setFailure)} severity="error">
                 {failText}
            </Alert>
        </Snackbar>
        {
          (numSigners > 0) &&
          <div className="row justify-content-left pb-2">
            Signé par {numSigners} étudiant.e.s vérifiés / Signed by {numSigners} verified students
          </div>
        }
      </div>
      </main>
      </Card>
  );
}
export default PetitionForm;
