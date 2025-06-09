import Raditz from "../assets/images/stage/raditz.jpg";
import Nappa from "../assets/images/stage/nappa.jpg";
import Vegeta from "../assets/images/stage/vegeta.png";
import OozaruVegeta from "../assets/images/stage/ouzaru.jpg";
import Turles from "../assets/images/stage/turles.png";
import Cui from "../assets/images/stage/cui.png";
import Dodoria from "../assets/images/stage/dodoria.jpg";
import Zarbon from "../assets/images/stage/zarbon.jpg";
import Guldo from "../assets/images/stage/guldo.jpg";
import Recome from "../assets/images/stage/recoome.png";
import Burter from "../assets/images/stage/burter.png";
import Jeice from "../assets/images/stage/jeice.png";
import Ginyu from "../assets/images/stage/ginyu.jpg";
import LordSlug from "../assets/images/stage/LordSlug.jpg";
import FreezaForm1 from "../assets/images/stage/freeza1.jpg";
import FreezaForm2 from "../assets/images/stage/freeza2.jpg";
import FreezaForm3 from "../assets/images/stage/freeza3.png";
import FreezaFinal from "../assets/images/stage/freeza4.jpg";
import GarlicJr from "../assets/images/stage/GarlicJr.png";
import Coola from "../assets/images/stage/coola.png";
import SuperCoola from "../assets/images/stage/supercoola.png";
import MetalCoola from "../assets/images/stage/metalcoola.png";
import MechaFreeza from "../assets/images/stage/mechfreeza.jpg";
import KingCold from "../assets/images/stage/kingcold.png";
import Android19 from "../assets/images/stage/android19.png";
import Android20 from "../assets/images/stage/android20.jpeg";
import Android17 from "../assets/images/stage/Android_17.png";
import Android18 from "../assets/images/stage/android18.jpg";
import Android16 from "../assets/images/stage/android16.png";
import Super13 from "../assets/images/stage/super13.png";

export const personagensData = [
  {
    id: 1,
    name: "Raditz",
    image: Raditz,
    story:
      "Raditz é um dos primeiros vilões da série DBZ e o irmão de Goku. Ele é um guerreiro Saiyajin, conhecido por sua brutalidade e pela sua chegada à Terra para conquistar o planeta.",
    quest: ["Derrote 10 Saibai", "Derrote Raditz"],
    drops: {
      minions: ["10x Zeni: 40%"],
      boss: [
        "50x Zeni: 70%",
        "1x Engrenagem A: 40%",
        "1x Gohan Boots Z: 30%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 2,
    name: "Nappa",
    image: Nappa,
    story:
      "Nappa é um dos membros da elite dos Saiyajins e serve como subordinado de Vegeta. Ele é grande e forte, conhecido por sua brutalidade e por ser um dos principais vilões da saga dos Saiyajins.",
    quest: ["Derrote 12 Saibaimen", "Derrote Nappa"],
    drops: {
      minions: ["20x Zeni: 40%"],
      boss: [
        "100x Zeni: 70%",
        "1x Engrenagem C: 20%",
        "1x Gohan Armor Z: 30%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 3,
    name: "Vegeta",
    image: Vegeta,
    story:
      "Vegeta é o príncipe dos Saiyajins e um dos personagens mais complexos de DB. Inicialmente um vilão, ele se torna um dos maiores aliados de Goku e de seus amigos.",
    quest: ["Derrote 15 Saibaiman", "Derrote Vegeta"],
    drops: {
      minions: ["30x Zeni: 40%"],
      boss: [
        "150x Zeni: 70%",
        "1x Gohan Bracer Z: 30%",
        "1x Box Kame House: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 4,
    name: "Oozaru Vegeta",
    image: OozaruVegeta,
    story:
      "Oozaru Vegeta é a versão gigantesca e furiosa de Vegeta, quando ele se transforma no macaco gigante durante a luta contra Goku na Terra.",
    quest: ["Derrote 15 Super Saibai", "Derrote Oozaru Vegeta"],
    drops: {
      minions: ["50x Zeni: 40%"],
      boss: [
        "250x Zeni: 70%",
        "1x Goku Bracer Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 5,
    name: "Turles",
    image: Turles,
    story:
      "Turles é um Saiyajin de um universo alternativo e o principal vilão do filme 'O Super Guerreiro'. Ele se assemelha fisicamente a Goku, mas é um vilão impiedoso.",
    quest: ["Derrote 20 Turles Soldier", "Derrote Turles"],
    drops: {
      minions: ["70x Zeni: 40%"],
      boss: [
        "350x Zeni: 70%",
        "1x Goku Pants Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 6,
    name: "Cui",
    image: Cui,
    story:
      "Cui é um dos subordinados de Freeza, que serve como comandante do exército de Freeza durante a saga Namekusei. Ele é derrotado por Vegeta.",
    quest: ["Derrote 20 Freeza Soldier 1", "Derrote Cui"],
    drops: {
      minions: ["50x Zeni: 40%"],
      boss: [
        "250x Zeni: 70%",
        "1x Goku Bracer Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 7,
    name: "Dodoria",
    image: Dodoria,
    story:
      "Dodoria é um dos subordinados de Freeza. Ele é um guerreiro forte e cruel que ajuda Freeza durante a invasão de Namekusei.",
    quest: ["Derrote 25 Freeza Soldier 2", "Derrote Dodoria"],
    drops: {
      minions: ["100x Zeni: 40%"],
      boss: [
        "500x Zeni: 70%",
        "1x Goku Armor Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 8,
    name: "Zarbon",
    image: Zarbon,
    story:
      "Zarbon é outro subordinado de Freeza e é um guerreiro de grande beleza, mas também de imensa força. Ele tem a habilidade de se transformar em uma forma mais poderosa.",
    quest: ["Derrote 25 Freeza Soldier 3", "Derrote Zarbon"],
    drops: {
      minions: ["130x Zeni: 40%"],
      boss: [
        "650x Zeni: 70%",
        "1x Goku Boots Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 9,
    name: "Guldo",
    image: Guldo,
    story:
      "Guldo é um dos membros da Força Ginyu e possui a habilidade de parar o tempo por um curto período. Ele é derrotado por Goku.",
    quest: ["Derrote 25 Freeza Soldier 4", "Derrote Guldo"],
    drops: {
      minions: ["200x Zeni: 40%"],
      boss: [
        "850x Zeni: 70%",
        "1x Goku Bracer Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 10,
    name: "Recoome",
    image: Recome,
    story:
      "Recoome é um dos membros da Força Ginyu e é conhecido por sua força física impressionante. Ele é derrotado por Goku.",
    quest: ["Derrote 30 Freeza Soldier 5", "Derrote Recoome"],
    drops: {
      minions: ["230x Zeni: 40%"],
      boss: [
        "1.150x Zeni: 70%",
        "1x Nappa Skirt Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 11,
    name: "Burter",
    image: Burter,
    story:
      "Burter é um dos membros da Força Ginyu, e é conhecido por ser o homem mais rápido do universo. Ele é derrotado por Goku.",
    quest: ["Derrote 30 Freeza Soldier 6", "Derrote Burter"],
    drops: {
      minions: ["300x Zeni: 40%"],
      boss: [
        "1.500x Zeni: 70%",
        "1x Nappa Armor Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 12,
    name: "Jeice",
    image: Jeice,
    story:
      "Jeice é um dos membros da Força Ginyu, e tem um ataque poderoso chamado 'Crusher Ball'. Ele é derrotado por Goku.",
    quest: ["Derrote 35 Freeza Soldier 7", "Derrote Jeice"],
    drops: {
      minions: ["380x Zeni: 40%"],
      boss: [
        "1.600x Zeni: 70%",
        "1x Nappa Bracer Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 13,
    name: "Ginyu",
    image: Ginyu,
    story:
      "Ginyu é o líder da Força Ginyu e tem a habilidade de trocar de corpo com outra pessoa. Ele é derrotado por Goku após uma troca de corpo.",
    quest: ["Derrote 35 Freeza Soldier 8", "Derrote Ginyu"],
    drops: {
      minions: ["500x Zeni: 40%"],
      boss: [
        "2.500x Zeni: 70%",
        "1x Nappa Boots Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 14,
    name: "Lord Slug",
    image: LordSlug,
    story:
      "Lord Slug é um vilão do filme 'Dragon Ball Z: O Super Guerreiro', e é um Namekusei que tem o poder de transformar os outros em pedra.",
    quest: ["Derrote 40 Namekian Villian", "Derrote Lord Slug"],
    drops: {
      minions: ["600x Zeni: 40%"],
      boss: [
        "3.000x Zeni: 70%",
        "1x Vegeta Skirt Z: 10%",
        "1x Box Sayan Family: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 15,
    name: "Freeza",
    image: FreezaForm1,
    story:
      "Freeza é o principal vilão da saga Namekusei e um dos mais poderosos guerreiros do universo, responsável pela destruição do planeta Vegeta.",
    quest: ["Derrote 40 Freeza Soldier 9", "Derrote Freeza Forma 1"],
    drops: {
      minions: ["720x Zeni: 40%"],
      boss: [
        "3.600x Zeni: 70%",
        "1x Vegeta Bracer Z: 10%",
        "1x Box Sayan Family: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 16,
    name: "Freeza",
    image: FreezaForm2,
    story:
      "Freeza é o principal vilão da saga Namekusei e um dos mais poderosos guerreiros do universo, responsável pela destruição do planeta Vegeta.",
    quest: ["Derrote 40 Freeza Soldier 10", "Derrote Freeza Forma 2"],
    drops: {
      minions: ["850x Zeni: 40%"],
      boss: [
        "4.250x Zeni: 70%",
        "1x Vegeta Boots Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 17,
    name: "Freeza",
    image: FreezaForm3,
    story:
      "Freeza é o principal vilão da saga Namekusei e um dos mais poderosos guerreiros do universo, responsável pela destruição do planeta Vegeta.",
    quest: ["Derrote 40 Freeza Soldier 11", "Derrote Freeza Forma 3"],
    drops: {
      minions: ["1.000x Zeni: 40%"],
      boss: [
        "5.000x Zeni: 70%",
        "1x Vegeta Armor Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 18,
    name: "Freeza",
    image: FreezaFinal,
    story:
      "Freeza é o principal vilão da saga Namekusei e um dos mais poderosos guerreiros do universo, responsável pela destruição do planeta Vegeta.",
    quest: ["Derrote 45 Freeza Soldier 12", "Derrote Freeza Final"],
    drops: {
      minions: ["1.300x Zeni: 40%"],
      boss: [
        "1x Piccolo Bracer Z: 10%",
        "6.500x Zeni: 70%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 19,
    name: "Garlic Jr.",
    image: GarlicJr,
    story:
      "Garlic Jr. é um vilão da série DBZ que aparece no arco de Garlic Jr. Ele é um imortal e tenta dominar a Terra.",
    quest: ["Derrote 50 Tien Clone", "Derrote Garlic Jr."],
    drops: {
      minions: ["1.600x Zeni: 40%"],
      boss: [
        "8.000x Zeni: 70%",
        "1x Box Kame House: 10%",
        "1x Piccolo Armor Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 20,
    name: "Coola",
    image: Coola,
    story:
      "Coola é o irmão mais velho de Freeza e aparece no filme 'Dragon Ball Z: O Retorno de Coola'. Ele tenta dominar o universo com seu exército.",
    quest: ["Derrote 50 Coola Soldier 1", "Derrote Coola"],
    drops: {
      minions: ["1.900x Zeni: 40%"],
      boss: [
        "9.500x Zeni: 70%",
        "1x Piccolo Boots Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 21,
    name: "Super Coola",
    image: SuperCoola,
    story:
      "Super Coola é a versão mais forte e transformada de Coola, ele aparece no filme 'Coola: O Retorno'.",
    quest: ["Derrote 50 Coola Robot", "Derrote Super Coola"],
    drops: {
      minions: ["2.500x Zeni: 40%"],
      boss: [
        "12.500x Zeni: 70%",
        "1x Piccolo Pants Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 22,
    name: "Metal Coola",
    image: MetalCoola,
    story:
      "Metal Coola é a forma cibernética do vilão Coola, que aparece em 'Dragon Ball Z: O Retorno de Coola'.",
    quest: ["Derrote 25 Freeza Soldier 2", "Derrote Metal Coola"],
    drops: {
      minions: ["3.000x Zeni: 40%"],
      boss: [
        "15.000x Zeni: 70%",
        "1x Trunks Jacket Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 23,
    name: "Mecha Freeza",
    image: MechaFreeza,
    story:
      "Mecha Freeza é a versão cibernética de Freeza, após sua destruição nas mãos de Goku, e aparece na saga de Dragon Ball Z.",
    quest: ["Derrote 50 Freeza Soldier 13", "Derrote Mecha Freeza"],
    drops: {
      minions: ["4.000x Zeni: 40%"],
      boss: [
        "20.000x Zeni: 70%",
        "1x Trunks Sword Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 24,
    name: "King Cold",
    image: KingCold,
    story:
      "King Cold é o pai de Freeza e o governante do império galáctico, conhecido por sua imensa força e crueldade.",
    quest: ["Derrote 50 Freeza Soldier 14", "Derrote King Cold"],
    drops: {
      minions: ["5.000x Zeni: 40%"],
      boss: [
        "25.000x Zeni: 70%",
        "1x Box Freeza Army: 10%",
        "1x Trunks Pants Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 25,
    name: "Android 19",
    image: Android19,
    story:
      "Android 19 é um dos androides criados pelo Dr. Gero e é um dos principais vilões na saga Android.",
    quest: ["Derrote 60 Android 8", "Derrote Android 19"],
    drops: {
      minions: ["6.500x Zeni: 40%"],
      boss: [
        "32.500x Zeni: 70%",
        "1x Trunks Boots Z: 10%",
        "1x Box Freeza Army: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 26,
    name: "Android 20",
    image: Android20, // Substitua por seu caminho de importação da imagem
    story:
      "Android 20, também conhecido como Dr. Gero, é o criador dos androides e um dos principais vilões na saga Android.",
    quest: ["Derrote 60 Android 15", "Derrote Android 20"],
    drops: {
      minions: ["8.000x Zeni: 40%"],
      boss: [
        "40.000x Zeni: 70%",
        "1x Android Bracer Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 27,
    name: "Android 17",
    image: Android17, // Substitua por seu caminho de importação da imagem
    story:
      "Android 17 é um dos androides criados pelo Dr. Gero e é um dos principais vilões na saga Android, com um papel importante na luta contra os Z Fighters.",
    quest: ["Derrote 65 Thief 1", "Derrote Android 17"],
    drops: {
      minions: ["9.500x Zeni: 40%"],
      boss: [
        "47.500x Zeni: 70%",
        "1x Android Armor: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 28,
    name: "Android 18",
    image: Android18, // Substitua por seu caminho de importação da imagem
    story:
      "Android 18 é uma das androides criadas pelo Dr. Gero, e é irmã de Android 17. Ela tem uma personalidade única e desempenha um papel importante na história.",
    quest: ["Derrote 65 Thief 2", "Derrote Android 18"],
    drops: {
      minions: ["11.000x Zeni: 40%"],
      boss: [
        "55.000x Zeni: 70%",
        "1x Android Pants Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 29,
    name: "Android 16",
    image: Android16, // Substitua por seu caminho de importação da imagem
    story:
      "Android 16 é um dos androides mais poderosos e com um código de ética diferente dos outros androides, ele busca destruir Goku para proteger a Terra.",
    quest: ["Derrote 65 Thief 3", "Derrote Android 16"],
    drops: {
      minions: ["13.000x Zeni: 40%"],
      boss: [
        "65.000x Zeni: 70%",
        "1x Android Boots Z: 10%",
        "1x Box Future Warriors: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
  {
    id: 30,
    name: "Super 13",
    image: Super13, // Substitua por seu caminho de importação da imagem
    story:
      "Super 13, também conhecido como 'Android 13' em sua forma mais poderosa, é um vilão da saga dos Androides. Ele é a versão mais poderosa do Android 13.",
    quest: ["Derrote 65 Thief 4", "Derrote Super 13"],
    drops: {
      minions: ["15.000x Zeni: 40%"],
      boss: [
        "36.000x Zeni: 70%",
        "1x Android Bracer Z: 10%",
        "1x Esfera do dragão aleatória: 0,5%",
      ],
    },
  },
];
