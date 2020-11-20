import React from "react";
import PetitionForm from "../PetitionForm";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import styles from "./home.module.css";
import { Card } from "@material-ui/core";

const Home = () => {
  return <main id="mainContent">
    <div className="container">
      <div className="row align-items-center pb-5">
        <div className="col-lg-8 col-md-12">
          <div className="row justify-content-center mt-5 p-0">
            <h3>Ajoutez votre voix pour réparer l'apprentissage virtuel / Add your voice to help fix online learning</h3>
          </div>
          <div className="row justify-content-center mt-2 p-0">
          <p className={styles.contentSize}>Ce semestre, l'apprentissage virtuel ne s'est pas exactement déroulé comme prévu. Il y a beaucoup d'améliorations qui doivent se faire, qu'il s'agisse de la charge de travail, de l'accès aux cours ou de la prestation des cours. Nous traversons une crise d'insécurité financière, une crise de santé mentale et une crise de santé publique, tout en payant les mêmes frais de scolarité pour une éducation de moindre qualité.<br /><br />

          Nous demandons à l'Université d'Ottawa d'introduire le même système de notation (satisfaisant/non-satisfaisant) que celui de Carleton, de réduire la charge de travail pour le prochain semestre, d'enregistrer des cours syncrhones, et bien plus encore. Consultez notre pétition et signez-la dès maintenant<br /><br />

          Online learning this semester has not exactly gone to plan. There's lots of improve, from workload, to course access, to course delivery. We're going through a financial insecurity crisis, a mental health crisis and a public health crisis, all while paying the same rates of tuition for a lower quality education.<br /><br />

          We're calling on uOttawa to introduce the same pass/fail grading system Carleton got, reduce the workload for next semester, record synchronous lectures, and much more. Check out our petition and sign now.
          </p>
          </div>
          <div className="row justify-content-center align-content-center pb-5">
              <PetitionForm />
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <Card>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="seuo_uosu"
            options={{height: 400}}
          />
          </Card>
        </div>
      </div>
    </div>
  </main>;
}
export default Home;
