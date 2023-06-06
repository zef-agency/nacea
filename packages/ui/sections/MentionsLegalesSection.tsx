/* eslint-disable react/no-unescaped-entities */

import { Text, Title } from "../components";

export default function MentionsLegalesSection() {
  return (
    <div className="mx-[5%] py-4">
      <Title className="mb-3" size="semiBig">
        Mentions légales
      </Title>
      <div className="flex flex-col gap-4">
        <div>
          <Text weight="bold"> Editeur du site : </Text>
          <Text> Editeur du site : </Text>
        </div>
        <div>
          <Text weight="bold"> Email: </Text>
          <Text> contact@nacea.fr </Text>
        </div>
        <div>
          <Text weight="bold"> Directeur de la publication : </Text>
          <Text> Tatiana Borie </Text>
        </div>
        <div>
          <Text weight="bold"> Numéro de SIRET : </Text>
          <Text>en attente </Text>
        </div>
        <div>
          <Text weight="bold"> Hébergeur du site : </Text>
          <Text> Digital Océan </Text>
        </div>
        <div>
          <Text weight="bold"> Conseils d'utilisation : </Text>
          <Text>
            Le site accessible par l'URL suivante : www.nacea.fr est exploité
            dans le respect de la législation française. L'utilisation de ce
            site est régie par les présentes conditions générales. En utilisant
            le site, vous reconnaissez avoir pris connaissance de ces conditions
            et les avoir acceptées. Celles-ci pourront être modifiées à tout
            moment et sans préavis par Nacea. Nacea ne saurait être tenue pour
            responsable en aucune manière d’une mauvaise utilisation du service.
            L'éditeur ne pourra être tenu responsable en cas de force majeure,
            de problèmes techniques ou de défaillance du réseau Internet.
          </Text>
        </div>
        <div>
          <Text weight="bold"> Politique de confidentialité : </Text>
          <Text>
            Nacea s’engage à respecter la vie privée de ses utilisateurs. Nous
            collectons uniquement les données nécessaires pour améliorer notre
            service, et nous nous engageons à ne pas les divulguer à des tiers
            sans autorisation préalable de votre part. Les données collectées
            sont conservées pendant une durée maximale de 3 ans. Vous pouvez
            exercer votre droit d'accès, de rectification, de suppression et de
            portabilité de vos données en nous contactant par e-mail ou par
            courrier.
          </Text>
        </div>

        <div>
          <Text weight="bold"> Propriété intellectuelle : </Text>
          <Text>
            Tous les contenus présents sur le site www.nacea.fr, incluant, de
            manière non limitative, les graphismes, images, textes, vidéos,
            logos, gifs et icônes ainsi que leur mise en forme sont la propriété
            exclusive de l'éditeur, à l'exception des marques, logos ou contenus
            appartenant à d'autres sociétés partenaires ou auteurs. Toute
            reproduction, distribution, modification, adaptation, retransmission
            ou publication, même partielle, de ces différents éléments est
            strictement interdite sans l'accord exprès par écrit de Nacea. Cette
            représentation ou reproduction, par quelque procédé que ce soit,
            constitue une contrefaçon sanctionnée par les articles L.335-2 et
            suivants du Code de la propriété intellectuelle.
          </Text>
        </div>
        <div>
          <Text weight="bold"> Liens hypertexte et cookies : </Text>
          <Text>
            Le site Nacea.fr peut contenir des liens hypertextes vers d’autres
            sites présents sur le réseau Internet. Les liens vers ces autres
            ressources vous font quitter le site www.nacea.fr. Il est possible
            de créer un lien vers la page de présentation de ce site sans
            autorisation expresse de l'éditeur. Aucune autorisation ou demande
            d'information préalable ne peut être exigée par l'éditeur à l'égard
            d'un site qui souhaite établir un lien vers le site de l'éditeur.
            Lors de la navigation sur le site www.nacea.fr, des cookies peuvent
            être installés sur l'ordinateur de l'utilisateur. Ces fichiers de
            petite taille ne permettent pas l'identification de l'utilisateur,
            mais enregistrent des informations sur sa navigation sur le site.
            Les données collectées facilitent la navigation ultérieure sur le
            site et permettent également de mesurer la fréquentation. Le refus
            d'installation d'un cookie peut empêcher l'accès à certains
            services. L'utilisateur peut cependant configurer son ordinateur
            pour refuser l'installation des cookies en suivant les étapes
            suivantes :
          </Text>
          <ul>
            <li>
              Sous Internet Explorer : cliquez sur l'onglet Outils (représenté
              par une roue dentée en haut à droite) / Options Internet. Cliquez
              sur Confidentialité et choisissez Bloquer tous les cookies.
              Validez en cliquant sur OK.
            </li>
            <li>
              Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le
              bouton Firefox, puis allez dans l'onglet Options. Cliquez sur
              l'onglet Vie privée. Paramétrez les Règles de conservation sur :
              utiliser les paramètres personnalisés pour l'historique. Enfin,
              décochez la case pour désactiver les cookies.
            </li>
            <li>
              Sous Safari : Cliquez en haut à droite du navigateur sur le
              pictogramme de menu (symbolisé par un rouage). Sélectionnez
              Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la
              section "Confidentialité", cliquez sur Paramètres de contenu. Dans
              la section "Cookies", vous pouvez bloquer les cookies.
            </li>
            <li>
              Sous Chrome : Cliquez en haut à droite du navigateur sur le
              pictogramme de menu (symbolisé par trois lignes horizontales).
              Sélectionnez Paramètres. Cliquez sur Afficher les paramètres
              avancés. Dans la section "Confidentialité", cliquez sur
              préférences. Dans l'onglet "Confidentialité", vous pouvez bloquer
              les cookies..
            </li>
          </ul>
        </div>
        <div>
          <Text weight="bold">
            {" "}
            DROIT APPLICABLE ET ATTRIBUTION DE JURIDICTION :{" "}
          </Text>
          <Text>
            Tout litige en relation avec l’utilisation du site www.nacea.fr est
            soumis au droit français. Il est fait attribution exclusive de
            juridiction aux tribunaux compétents de Bordeaux.
          </Text>
        </div>
        <div>
          <Text weight="bold">LES PRINCIPALES LOIES CONCERNEES : </Text>
          <Text>
            Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n°
            2004-801 du 6 août 2004 relative à l’informatique, aux fichiers et
            aux libertés. Loi n° 2004-575 du 21 juin 2004 pour la confiance dans
            l’économie numérique.
          </Text>
        </div>
        <div>
          <Text weight="bold"> LEXIQUE : </Text>
          <Text>
            Utilisateur : Internaute se connectant et utilisant le site
            susmentionné. Informations personnelles : "les informations qui
            permettent, sous quelque forme que ce soit, directement ou non,
            l'identification des personnes physiques auxquelles elles
            s'appliquent" (article 4 de la loi n°78-17 du 6 janvier 1978).
          </Text>
        </div>
      </div>
    </div>
  );
}
