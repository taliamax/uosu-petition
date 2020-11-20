import React, { useState } from "react";
import {
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    MenuItem,
    Button,
    CircularProgress,
    Snackbar,
    Card
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import styles from "./testimonialsubmit.module.css";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const TestimonialSubmit = () => {
  const [name, setName] = useState("");
  const [program, setProgram] = useState("");
  const [year, setYear] = useState("");
  const [anonymousCheck, setAnonymousCheck] = useState(false);
  const [comment, setComment] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [failText, setFailText] = useState("Quelque chose a mal fonctionné... / Something went wrong...");

  const MAX_CHARS = 1500;

  const enableSubmit = (
    (name !== "" || anonymousCheck) &&
    program !== "" &&
    year !== "" &&
    comment !== "" &&
    comment.length <= MAX_CHARS &&
    !sending
  );

  const handleAlertClose = (type) => (e, r) => {
      if (r === 'clickaway') {
          return;
      }

      type(false);
      setFailText("Quelque chose a mal fonctionné... / Something went wrong...")
  }

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const years = [
    {
      value: '1',
      label: '1e année / First',
    },
    {
      value: '2',
      label: '2e année / Second',
    },
    {
      value: '3',
      label: '3e année / Third',
    },
    {
      value: '4',
      label: '4e année / Fourth',
    },
    {
        value: '5',
        label: '5e année et plus / Fifth+',
    },
    {
        value: 'msc',
        label: 'Deuxième cycle / Masters',
    },
    {
        value: 'phd',
        label: 'Doctorat / Ph.D.',
    }
  ];

  const handleClick = () => {
      setSending(true);
      const queryParams = {
        headers: {
            "Content-Type":"application/json; charset: UTF-8"
        },
        body: JSON.stringify({
            name: name,
            program: program,
            year: year,
            testimonial: comment,
            anonymous: anonymousCheck,
        }),
        method: "POST"
      }

      const url = "/api/testimonial/submit";

      fetch(url, queryParams)
      .then(data => { return data.json()})
      .then(res => {
        if (res.success) {
          setSuccess(true);
        }
        else if (res.success !== undefined && !res.success) {
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
    <main id="mainContent">
        <div className={`container ${styles.contentSize} pb-5`}>
            <div className="row pt-5 pb-2">
                <h1>
                Ajoutez votre voix / Add Your Voice
                </h1>
            </div>
            <Card
                className="row justify-contents-center px-5 pt-3"
            >
                <div className="container m-0 p-2 pb-5">
                    <div className="row justify-content-left pb-3">
                        <p className={`${styles.caption}`}>
                            Nous aimerions connaître votre avis! Les commentaires soumis dans ce formulaire seront soumis à l&apos;examen de l&apos;équipe uPetition et, s&apos;ils sont acceptés, seront affichés sur notre page "Voix d'étudiants".<br /><br />

                            Seul votre prénom (ou &apos;Anonyme&apos; si vous avez été sélectionné) sera affiché, même si vous fournissez votre nom complet".<br /><br />
                            We would love to hear your thoughts! Comments submitted in this form will be subject to review by the uPetition team and, if they are accepted, will be displayed on our Student Voices page.<br /><br />
                            Only your first name (or &apos;Anonymous&apos; if selected) will be displayed, even if you provide the full name.<br /><br />
                        </p>
                    </div>
                    <div className="row justify-content-center p-0 pb-3">
                    <div className="col-sm-12">
                        <TextField
                        required
                        label="Prénom / Name"
                        value={(anonymousCheck && 'Anonyme / Anonymous') || name}
                        fullWidth
                        onChange={(e) => setName(e.target.value)}
                        disabled={anonymousCheck}
                        />
                    </div>
                    </div>
                    <div className="row justify-content-center p-0 pb-4">
                    <div className="col-sm-12 col-md-6">
                        <TextField
                        required
                        label="Programme / Program"
                        value={program}
                        fullWidth
                        onChange={(e) => setProgram(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <TextField
                            id="year-select"
                            select
                            label="Anée / Year"
                            value={year}
                            fullWidth
                            onChange={handleYearChange}
                            >
                            {years.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <TextField
                        required
                        label="Message"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        multiline
                        autosize={true}
                        fullWidth
                        error={comment.length > MAX_CHARS}
                        helperText={`${comment.length}/${MAX_CHARS}`}
                    />
                    </div>
                    <div className="row justify-content-left">
                        <FormGroup>
                            <FormControlLabel
                            control={
                                <Checkbox
                                checked={anonymousCheck}
                                onChange={(e) => setAnonymousCheck(e.target.checked)}
                                inputProps={{'aria-label': 'Je souhaite que mon commentaire soit affiché de manière anonyme / I would like my comment to be displayed anonymously'}}
                                />
                            }
                            label='Je souhaite que mon commentaire soit affiché de manière anonyme / I would like my comment to be displayed anonymously'
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
                        Votre témoignage a été envoyé ! Merci pour votre soutien / Your testimonial has been sent! Thank you for your support
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
                </div>
            </Card>
        </div>
      </main>
  );
}
export default TestimonialSubmit;
