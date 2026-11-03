import { Component, computed, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterLink } from "@angular/router";
import { ScrollRevealDirective } from "../../shared/scroll-reveal/scroll-reveal.directive";

interface HealthTip {
  title: string;
  description: string;
  points: string[];
  symbol: string;
}

interface SymptomGuide {
  title: string;
  description: string;
  causes: string[];
  advice: string;
}

@Component({
  standalone: true,
  selector: "app-health-page",
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    RouterLink,
    ScrollRevealDirective,
  ],
  templateUrl: "./health-page.component.html",
  styleUrl: "./health-page.component.css",
})
export class HealthPageComponent {
  protected readonly symptomQuery = signal("");

  protected readonly wellnessTips: HealthTip[] = [
    {
      title: "Sommeil réparateur",
      description:
        "Dormez 7 à 9 heures par nuit. Créez une routine régulière et évitez les écrans avant le coucher.",
      points: [
        "Chambre sombre et fraîche",
        "Évitez le café après 14 h",
        "Pratiquez une activité physique en journée",
      ],
      symbol: "☾",
    },
    {
      title: "Alimentation équilibrée",
      description:
        "Variez les aliments et privilégiez les fruits, légumes, protéines maigres et céréales complètes.",
      points: [
        "Fruits et légumes chaque jour",
        "Buvez régulièrement de l’eau",
        "Limitez le sucre et le sel",
      ],
      symbol: "◉",
    },
    {
      title: "Activité physique",
      description:
        "Une activité régulière contribue au bien-être, à l’humeur et à la santé cardiovasculaire.",
      points: [
        "Marche quotidienne",
        "Essayez la natation ou le yoga",
        "Adaptez l’effort à votre condition",
      ],
      symbol: "↗",
    },
    {
      title: "Gestion du stress",
      description:
        "Des moments de détente, la respiration profonde et les loisirs peuvent aider à réduire le stress.",
      points: [
        "Prenez quelques minutes pour respirer",
        "Prévoyez des moments de repos",
        "Demandez de l’aide si nécessaire",
      ],
      symbol: "❋",
    },
    {
      title: "Hydratation",
      description:
        "Buvez régulièrement au cours de la journée, en tenant compte de votre activité et de votre environnement.",
      points: [
        "Gardez de l’eau à portée de main",
        "Buvez dès que vous avez soif",
        "Limitez les boissons très sucrées",
      ],
      symbol: "◌",
    },
    {
      title: "Santé mentale",
      description:
        "Prenez soin de votre bien-être mental, entretenez vos liens sociaux et recherchez du soutien si besoin.",
      points: [
        "Maintenez des liens sociaux",
        "Gardez des activités qui vous plaisent",
        "Consultez si un mal-être persiste",
      ],
      symbol: "♡",
    },
  ];

  protected readonly dailyTips: HealthTip[] = [
    {
      title: "Lavez-vous les mains régulièrement",
      description:
        "Lavez vos mains pendant 20 secondes avec du savon et de l’eau, notamment avant de manger et après être allé aux toilettes.",
      points: [],
      symbol: "◉",
    },
    {
      title: "Protégez votre peau du soleil",
      description:
        "Protégez votre peau lors des expositions au soleil, même lorsque le ciel est nuageux.",
      points: [],
      symbol: "☼",
    },
    {
      title: "Prenez soin de vos dents",
      description:
        "Brossez-vous les dents deux fois par jour et consultez un professionnel pour le suivi de votre santé bucco-dentaire.",
      points: [],
      symbol: "✦",
    },
    {
      title: "Accordez une pause à vos yeux",
      description:
        "Faites régulièrement des pauses lorsque vous regardez un écran et regardez au loin pour reposer vos yeux.",
      points: [],
      symbol: "◎",
    },
    {
      title: "Faites suivre votre tension",
      description:
        "Faites contrôler votre tension artérielle régulièrement auprès d’un professionnel de santé.",
      points: [],
      symbol: "♡",
    },
    {
      title: "Marchez davantage",
      description:
        "Intégrez la marche à votre quotidien, par exemple lors de courts trajets ou d’une promenade.",
      points: [],
      symbol: "↗",
    },
    {
      title: "Aérez votre logement",
      description:
        "Aérez régulièrement votre intérieur afin de renouveler l’air.",
      points: [],
      symbol: "⌁",
    },
    {
      title: "Gardez une routine régulière",
      description:
        "Des horaires réguliers pour les repas, le sommeil et l’activité peuvent contribuer à votre équilibre.",
      points: [],
      symbol: "◷",
    },
  ];

  protected readonly symptomGuides: SymptomGuide[] = [
    {
      title: "Fièvre",
      description: "Température corporelle supérieure à 38 °C.",
      causes: [
        "Grippe ou rhume",
        "Infections bactériennes",
        "Inflammation",
        "Infection urinaire",
      ],
      advice:
        "Reposez-vous et hydratez-vous. Consultez un médecin si la fièvre persiste ou vous inquiète.",
    },
    {
      title: "Toux",
      description: "Réflexe de défense des voies respiratoires.",
      causes: ["Rhume ou grippe", "Bronchite", "Asthme", "Allergie"],
      advice:
        "Hydratez-vous. Consultez un professionnel si la toux dure, s’aggrave ou vous inquiète.",
    },
    {
      title: "Mal de tête",
      description: "Douleur dans la région de la tête.",
      causes: [
        "Stress ou tension",
        "Migraine",
        "Manque d’hydratation",
        "Infection",
      ],
      advice:
        "Reposez-vous au calme. Demandez conseil à un professionnel si la douleur est intense, nouvelle ou persistante.",
    },
    {
      title: "Mal de gorge",
      description: "Douleur ou irritation de la gorge.",
      causes: [
        "Pharyngite virale",
        "Angine streptococcique",
        "Laryngite",
        "Irritation",
      ],
      advice:
        "Demandez un avis médical si les symptômes persistent, s’accompagnent de fièvre ou vous inquiètent.",
    },
    {
      title: "Nausée ou vomissements",
      description: "Sensation d’envie de vomir.",
      causes: [
        "Gastro-entérite",
        "Mal des transports",
        "Alimentation inadéquate",
        "Stress",
      ],
      advice:
        "Reposez-vous et buvez par petites quantités. Consultez rapidement en cas de déshydratation ou de symptômes prolongés.",
    },
    {
      title: "Douleur abdominale",
      description: "Douleur au niveau du ventre.",
      causes: [
        "Gastro-entérite",
        "Indigestion",
        "Constipation",
        "Appendicite (urgence)",
      ],
      advice:
        "Consultez rapidement un professionnel si la douleur est intense, soudaine ou s’aggrave.",
    },
    {
      title: "Fatigue",
      description: "Épuisement ou manque d’énergie.",
      causes: ["Manque de sommeil", "Anémie", "Dépression", "Hypothyroïdie"],
      advice:
        "Consultez un médecin si la fatigue persiste ou affecte votre quotidien.",
    },
    {
      title: "Douleur musculaire",
      description: "Douleur au niveau des muscles.",
      causes: [
        "Effort physique",
        "Grippe ou virus",
        "Fibromyalgie",
        "Arthrite",
      ],
      advice:
        "Demandez conseil à un professionnel si la douleur est intense, persiste ou s’accompagne d’autres symptômes.",
    },
    {
      title: "Symptômes allergiques",
      description: "Éternuements, démangeaisons ou écoulement nasal.",
      causes: [
        "Allergie saisonnière",
        "Allergie alimentaire",
        "Allergie aux animaux",
        "Rhinite allergique",
      ],
      advice:
        "Consultez un professionnel pour identifier les causes et les mesures adaptées. En cas de réaction grave, appelez les urgences.",
    },
  ];

  protected readonly filteredSymptoms = computed(() => {
    const query = this.symptomQuery().trim().toLocaleLowerCase("fr");
    if (!query) {
      return this.symptomGuides;
    }

    return this.symptomGuides.filter((symptom) =>
      [symptom.title, symptom.description, symptom.advice, ...symptom.causes]
        .join(" ")
        .toLocaleLowerCase("fr")
        .includes(query),
    );
  });
}
