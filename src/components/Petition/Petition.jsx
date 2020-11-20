import React from "react";
import PetitionForm from "../PetitionForm";
import styles from "./petition.module.css";

const Petition = () => {
  return <main id="mainContent">
    <div className={`container ${styles.contentSize}`}>
      <div className="row justify-content-center pb-5">
        <h2>Pétition</h2>
        <p>L'apprentissage virtuel doit s'améliorer. Ce semestre a été extrêmement difficile, et les étudiant.e.s de l'Université d'Ottawa s'efforcent de surmonter trois crises simultanées : une crise d'insécurité financière, causée par la pénurie d'emplois étudiant.e.s et la fin de l'aide gouvernementale pour de nombreux étudiant.e.s, une crise de santé mentale, qui se poursuit sur le campus et a été exacerbée par les récents événements, et une crise sanitaire mondiale, qui nous affecte tous et toutes.</p>

        <p>Il est évident que, ce semestre, la qualité des cours et l'accès au contenu ont diminué. Dans le même temps, la charge de travail globale a augmenté de façon spectaculaire. Les étudiant.e.s qui ne vivent pas à Ottawa ont également du mal à suivre les cours synchrones, et certains professeurs enseignent au-delà du temps maximum alloué. Ces défis, combinés au monde difficile dans lequel nous vivons, ont rendu l'apprentissage en ligne inaccessible pour la grande majorité des étudiants.</p>

        <p>À la lumière de ces défis, nous, les étudiant.e.s soussigné.e.s, demandons à l'Université d'Ottawa d'apporter les changements suivants pour aider à corriger l'apprentissage virtuel :</p>

        <h5>UNE NOTATION DE RÉUSSITE ET D'ÉCHEC MODIFIÉE ET FONDÉE SUR LA COMPASSION</h5>

        <strong>
          <p>
            Nous demandons à l’Université...
            <ul>
              <li>de convertir automatiquement toute note qui constitue un échec en « non satisfaisant », tant pour les semestres d'automne 2020 que d'hiver 2021 ;</li>
              <li>de permettre la conversion facultative d'un (1) cours de 3 unités par semestre à la désignation « satisfaisant », pour les semestres d'automne 2020 et d'hiver 2021.</li>
            </ul>
          </p>
        </strong>

        <h5>CHARGE DE TRAVAIL</h5>

        <strong>
          <p>
            Nous demandons à l’Université...
            <ul>
              <li>de publier une directive à l'intention des professeurs par l'intermédiaire du Service d’appui à l'enseignement et à l'apprentissage, les invitant à réduire le nombre de travaux pour le semestre d'hiver 2021, tout en maintenant une approche souple et compatissante en matière de notation et de délais ;</li>
              <li>de publier une directive ou un règlement académique modifié encourageant les professeurs à ne pas dépasser le temps maximum habituel alloué pour leurs cours.</li>
            </ul>
          </p>
        </strong>

        <h5>LA PRESTATION DES COURS</h5>

        <strong>
          <p>
            Nous demandons à l’Université...
            <ul>
              <li>de publier une directive et de continuer à fournir des ressources, afin d’assurer que les professeurs enregistrent les composantes synchrones de leurs cours, à l'exception notable des cours qui traitent de sujets sensibles ou qui doivent protéger la vie privée des étudiant.e.s.</li>
              <li>de travailler avec l'uOzone et les professeurs pour identifier à l'avance les cours qui auront des composantes synchrones, permettant aux étudiant.e.s vivant dans des fuseaux horaires différents de choisir différentes options à l’avance lorsque cela est possible.</li>
            </ul>
          </p>
        </strong>
        <br /><br />
        <h2>Petition</h2>
        <p>Online learning needs to improve. This semester has been extremely challenging, and uOttawa students have been trying to overcome a financial insecurity crisis, caused by a dearth of student jobs and the end of government assistance for many domestic students, a mental health crisis, which is ongoing on campus and has been exacerbated by recent events, and a global health crisis, which is affecting us all.</p>

        <p>It’s abundantly clear that, this semester, the quality of courses &amp; access to content has decreased. At the same time, the overall workload has dramatically increased. Students not living in Ottawa are also struggling to keep up with synchronous classes, and some professors are teaching above the maximum allotted time. These challenges, combined with the difficult world we live in, has made online learning inaccessible for the vast majority of the student body.</p>

        <p>In light of these challenges, we, the undersigned students, call on the University of Ottawa to make the following changes to help fix online learning:</p>

        <h5>COMPASSIONATE, MODIFIED PASS-FAIL GRADING</h5>
        <strong>
          <p>
            The University should:
            <ul>
              <li>Automatically convert any grades that constitute a ‘Fail’ to the Not Satisfactory designation, for both the Fall 2020 and Winter 2021 semesters;</li>
              <li>Permit the optional conversion of one (1) 3-unit course per semester to a Satisfactory designation, for both the Fall 2020 and Winter 2021 semesters.</li>
            </ul>
          </p>
        </strong>

        <h5>WORKLOAD</h5>
        <strong>
          <p>
            The University should:
            <ul>
              <li>Issue a guideline to professors through the Teaching &amp; Learning Support Service urging them to reduce the number of assignments for the Winter 2021 semester, while maintaining a flexible &amp; compassionate approach to grading &amp; deadlines;</li>
              <li>Issue a guideline or amended academic regulation encouraging professors to not exceed the regular maximum of time for the lecture component of their courses.</li>
            </ul>
          </p>
        </strong>

        <h5>COURSE DELIVERY</h5>
        <strong>
          <p>
            The University should:
            <ul>
              <li>Issue a guideline and continue to provide resources requiring professors to record synchronous lectures or components of their courses where possible, with the notable exception of courses that discuss sensitive material or that must protect student privacy.</li>
              <li>Work with uOzone and professors to identify ahead of time which courses will have synchronous components, allowing for students living in different time zones to pursue different options where possible.</li>
            </ul>
          </p>
        </strong>
      </div>
      <div className="row justify-content-center pb-5">
        <PetitionForm />
      </div>
    </div>
  </main>;
}
export default Petition;
