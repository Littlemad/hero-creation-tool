classObj={
    "class": [
        {
            "name": "Barbarian",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "hd": {
                "number": 1,
                "faces": 12
            },
            "proficiency": [
                "str",
                "con"
            ],
            "startingProficiencies": {
                "armor": [
                    "light",
                    "medium",
                    "shields"
                ],
                "weapons": [
                    "simple",
                    "martial"
                ],
                "skills": [
                    {
                        "choose": {
                            "from": [
                                "animal handling",
                                "athletics",
                                "intimidation",
                                "nature",
                                "perception",
                                "survival"
                            ],
                            "count": 2
                        }
                    }
                ]
            },
            "startingEquipment": {
                "additionalFromBackground": true,
                "default": [
                    "(a) a {@item greataxe|phb} or (b) any {@filter martial melee weapon|items|source=phb|category=basic|type=martial weapon;melee weapon=sand}",
                    "(a) two {@item handaxe|phb|handaxes} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
                    "An {@item explorer's pack|phb}, and four {@item javelin|phb|javelins}"
                ],
                "goldAlternative": "{@dice 2d4 × 10|2d4 × 10|Starting Gold}",
                "defaultData": [
                    {
                        "a": [
                            "greataxe|phb"
                        ],
                        "b": [
                            {
                                "equipmentType": "weaponMartialMelee"
                            }
                        ]
                    },
                    {
                        "a": [
                            {
                                "item": "handaxe|phb",
                                "quantity": 2
                            }
                        ],
                        "b": [
                            {
                                "equipmentType": "weaponSimple"
                            }
                        ]
                    },
                    {
                        "_": [
                            "explorer's pack|phb",
                            {
                                "item": "javelin|phb",
                                "quantity": 4
                            }
                        ]
                    }
                ]
            },
            "multiclassing": {
                "requirements": {
                    "str": 13
                },
                "proficienciesGained": {
                    "armor": [
                        "shields"
                    ],
                    "weapons": [
                        "simple",
                        "martial"
                    ]
                }
            },
            "classTableGroups": [
                {
                    "colLabels": [
                        "Rages",
                        "Rage Damage"
                    ],
                    "rows": [
                        [
                            "2",
                            {
                                "type": "bonus",
                                "value": 2
                            }
                        ],
                        [
                            "2",
                            {
                                "type": "bonus",
                                "value": 2
                            }
                        ],
                        [
                            "3",
                            {
                                "type": "bonus",
                                "value": 2
                            }
                        ],
                        [
                            "3",
                            {
                                "type": "bonus",
                                "value": 2
                            }
                        ],
                        [
                            "3",
                            {
                                "type": "bonus",
                                "value": 2
                            }
                        ],
                        [
                            "4",
                            {
                                "type": "bonus",
                                "value": 2
                            }
                        ],
                        [
                            "4",
                            {
                                "type": "bonus",
                                "value": 2
                            }
                        ],
                        [
                            "4",
                            {
                                "type": "bonus",
                                "value": 2
                            }
                        ],
                        [
                            "4",
                            {
                                "type": "bonus",
                                "value": 3
                            }
                        ],
                        [
                            "4",
                            {
                                "type": "bonus",
                                "value": 3
                            }
                        ],
                        [
                            "4",
                            {
                                "type": "bonus",
                                "value": 3
                            }
                        ],
                        [
                            "5",
                            {
                                "type": "bonus",
                                "value": 3
                            }
                        ],
                        [
                            "5",
                            {
                                "type": "bonus",
                                "value": 3
                            }
                        ],
                        [
                            "5",
                            {
                                "type": "bonus",
                                "value": 3
                            }
                        ],
                        [
                            "5",
                            {
                                "type": "bonus",
                                "value": 3
                            }
                        ],
                        [
                            "5",
                            {
                                "type": "bonus",
                                "value": 4
                            }
                        ],
                        [
                            "6",
                            {
                                "type": "bonus",
                                "value": 4
                            }
                        ],
                        [
                            "6",
                            {
                                "type": "bonus",
                                "value": 4
                            }
                        ],
                        [
                            "6",
                            {
                                "type": "bonus",
                                "value": 4
                            }
                        ],
                        [
                            "Unlimited",
                            {
                                "type": "bonus",
                                "value": 4
                            }
                        ]
                    ]
                }
            ],
            "classFeatures": [
                "Rage|Barbarian||1",
                "Unarmored Defense|Barbarian||1",
                "Danger Sense|Barbarian||2",
                "Survival Instincts|Barbarian||2|UAClassFeatureVariants",
                "Reckless Attack|Barbarian||2",
                {
                    "classFeature": "Primal Path|Barbarian||3",
                    "gainSubclassFeature": true
                },
                "Primal Knowledge|Barbarian||3|TCE",
                "Ability Score Improvement|Barbarian||4",
                "Proficiency Versatility|Barbarian||4|UAClassFeatureVariants",
                "Extra Attack|Barbarian||5",
                "Fast Movement|Barbarian||5",
                "Instinctive Pounce|Barbarian||5|UAClassFeatureVariants",
                {
                    "classFeature": "Path Feature|Barbarian||6",
                    "gainSubclassFeature": true
                },
                "Feral Instinct|Barbarian||7",
                "Instinctive Pounce|Barbarian||7|TCE",
                "Ability Score Improvement|Barbarian||8",
                "Proficiency Versatility|Barbarian||8|UAClassFeatureVariants",
                "Brutal Critical (1 die)|Barbarian||9",
                {
                    "classFeature": "Path feature|Barbarian||10",
                    "gainSubclassFeature": true
                },
                "Relentless Rage|Barbarian||11",
                "Ability Score Improvement|Barbarian||12",
                "Proficiency Versatility|Barbarian||12|UAClassFeatureVariants",
                "Brutal Critical (2 dice)|Barbarian||13",
                {
                    "classFeature": "Path feature|Barbarian||14",
                    "gainSubclassFeature": true
                },
                "Persistent Rage|Barbarian||15",
                "Ability Score Improvement|Barbarian||16",
                "Proficiency Versatility|Barbarian||16|UAClassFeatureVariants",
                "Brutal Critical (3 dice)|Barbarian||17",
                "Indomitable Might|Barbarian||18",
                "Ability Score Improvement|Barbarian||19",
                "Proficiency Versatility|Barbarian||19|UAClassFeatureVariants",
                "Primal Champion|Barbarian||20"
            ],
            "subclassTitle": "Primal Path",
            "subclasses": [
                {
                    "name": "Path of the Berserker",
                    "shortName": "Berserker",
                    "source": "PHB",
                    "page": 49,
                    "srd": true,
                    "subclassFeatures": [
                        "Path of the Berserker|Barbarian||Berserker||3",
                        "Mindless Rage|Barbarian||Berserker||6",
                        "Intimidating Presence|Barbarian||Berserker||10",
                        "Retaliation|Barbarian||Berserker||14"
                    ]
                }
            ],
            "fluff": [
                {
                    "name": "Barbarian",
                    "type": "section",
                    "entries": [
                        "A tall human tribesman strides through a blizzard, draped in fur and hefting his axe. He laughs as he charges toward the frost giant who dared poach his people's elk herd.",
                        "A half-orc snarls at the latest challenger to her authority over their savage tribe, ready to break his neck with her bare hands as she did to the last six rivals.",
                        "Frothing at the mouth, a dwarf slams his helmet into the face of his drow foe, then turns to drive his armored elbow into the gut of another.",
                        "These barbarians, different as they might be, are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea.",
                        "For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.",
                        {
                            "type": "entries",
                            "name": "Primal Instinct",
                            "entries": [
                                "People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one's own nature was a mark of superiority. To a barbarian, though, civilization is no virtue, but a sign of weakness. The strong embrace their animal nature—keen instincts, primal physicality, and ferocious rage. Barbarians are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their homelands: the tundra, jungle, or grasslands where their tribes live and hunt.",
                                "Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise."
                            ]
                        },
                        {
                            "type": "entries",
                            "name": "A Life of Danger",
                            "entries": [
                                "Not every member of the tribes deemed \"barbarians\" by scions of civilized society has the barbarian class. A true barbarian among these people is as uncommon as a skilled fighter in a town, and he or she plays a similar role as a protector of the people and a leader in times of war. Life in the wild places of the world is fraught with peril: rival tribes, deadly weather, and terrifying monsters. Barbarians charge headlong into that danger so that their people don't have to.",
                                "Their courage in the face of danger makes barbarians perfectly suited for adventuring. Wandering is often a way of life for their native tribes, and the rootless life of the adventurer is little hardship for a barbarian. Some barbarians miss the close-knit family structures of the tribe, but eventually find them replaced by the bonds formed among the members of their adventuring parties."
                            ]
                        },
                        {
                            "type": "entries",
                            "name": "Creating a Barbarian",
                            "entries": [
                                "When creating a barbarian character, think about where your character comes from and his or her place in the world. Talk with your DM about an appropriate origin for your barbarian. Did you come from a distant land, making you a stranger in the area of the campaign? Or is the campaign set in a rough-and-tumble frontier where barbarians are common?",
                                "What led you to take up the adventuring life? Were you lured to settled lands by the promise of riches? Did you join forces with soldiers of those lands to face a shared threat? Did monsters or an invading horde drive you out of your homeland, making you a rootless refugee? Perhaps you were a prisoner of war, brought in chains to \"civilized\" lands and only now able to win your freedom. Or you might have been cast out from your people because of a crime you committed, a taboo you violated, or a coup that removed you from a position of authority.",
                                {
                                    "type": "entries",
                                    "name": "Quick Build",
                                    "entries": [
                                        "You can make a barbarian quickly by following these suggestions. First, put your highest ability score in Strength, followed by Constitution. Second, choose the {@background outlander} background."
                                    ]
                                }
                            ]
                        }
                    ],
                    "source": "PHB",
                    "page": 46
                },
                {
                    "type": "section",
                    "entries": [
                        {
                            "type": "quote",
                            "entries": [
                                "I have witnessed the indomitable performance of barbarians on the field of battle, and it makes me wonder what force lies at the heart of their rage."
                            ],
                            "by": "Seret, archwizard"
                        },
                        "The anger felt by a normal person resembles the rage of a barbarian in the same way that a gentle breeze is akin to a furious thunderstorm. The barbarian's driving force comes from a place that transcends mere emotion, making its manifestation all the more terrible. Whether the impetus for the fury comes entirely from within or from forging a link with a spirit animal, a raging barbarian becomes able to perform supernatural feats of strength and endurance. The outburst is temporary, but while it lasts, it takes over body and mind, driving the barbarian on despite peril and injury, until the last enemy falls.",
                        "It can be tempting to play a barbarian character that is a straightforward application of the classic archetype—a brute, and usually a dimwitted one at that, who rushes in where others fear to tread. But not all the barbarians in the world are cut from that cloth, so you can certainly put your own spin on things. Either way, consider adding some flourishes to make your barbarian stand out from all others; see the following sections for some ideas.",
                        {
                            "type": "entries",
                            "name": "Personal Totems",
                            "entries": [
                                "Barbarians tend to travel light, carrying little in the way of personal effects or other unnecessary gear. The few possessions they do carry often include small items that have special significance. A personal totem is significant because it has a mystical origin or is tied to an important moment in the character's life—perhaps a remembrance from the barbarian's past or a harbinger of what lies ahead.",
                                "A personal totem of this sort might be associated with a barbarian's spirit animal, or might actually be the totem object for the animal, but such a connection is not essential. One who has a bear totem spirit, for instance, could still carry an eagle's feather as a personal totem.",
                                "Consider creating one or more personal totems for your character—objects that hold a special link to your character's past or future. Think about how a totem might affect your character's actions.",
                                {
                                    "type": "table",
                                    "caption": "Personal Totems",
                                    "colLabels": [
                                        "{@dice d6}",
                                        "Totem"
                                    ],
                                    "colStyles": [
                                        "col-1 text-center",
                                        "col-11"
                                    ],
                                    "rows": [
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 1
                                                }
                                            },
                                            "A tuft of fur from a solitary wolf that you befriended during a hunt"
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 2
                                                }
                                            },
                                            "Three eagle feathers given to you by a wise shaman, who told you they would play a role in determining your fate"
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 3
                                                }
                                            },
                                            "A necklace made from the claws of a young cave bear that you slew singlehandedly as a child"
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 4
                                                }
                                            },
                                            "A small leather pouch holding three stones that represent your ancestors"
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 5
                                                }
                                            },
                                            "A few small bones from the first beast you killed, tied together with colored wool"
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 6
                                                }
                                            },
                                            "An egg-sized stone in the shape of your spirit animal that appeared one day in your belt pouch"
                                        ]
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "entries",
                            "name": "Tattoos",
                            "entries": [
                                "The members of many barbarian clans decorate their bodies with tattoos, each of which represents a significant moment in the life of the bearer or the bearer's ancestors, or which symbolizes a feeling or an attitude. As with personal totems, a barbarian's tattoos might or might not be related to an animal spirit.",
                                "Each tattoo a barbarian displays contributes to that individual's identity. If your character wears tattoos, what do they look like, and what do they represent?",
                                {
                                    "type": "table",
                                    "caption": "Tattoos",
                                    "colLabels": [
                                        "{@dice d6}",
                                        "Tattoo"
                                    ],
                                    "colStyles": [
                                        "col-1 text-center",
                                        "col-11"
                                    ],
                                    "rows": [
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 1
                                                }
                                            },
                                            "The wings of an eagle are spread wide across your upper back."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 2
                                                }
                                            },
                                            "Etched on the backs of your hands are the paws of a cave bear."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 3
                                                }
                                            },
                                            "The symbols of your clan are displayed in viny patterns along your arms."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 4
                                                }
                                            },
                                            "The antlers of an elk are inked across your back."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 5
                                                }
                                            },
                                            "Images of your spirit animal are tattooed along your weapon arm and hand."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 6
                                                }
                                            },
                                            "The eyes of a wolf are marked on your back to help you see and ward off evil spirits."
                                        ]
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "entries",
                            "name": "Superstitions",
                            "entries": [
                                "Barbarians vary widely in how they understand life. Some follow gods and look for guidance from those deities in the cycles of nature and the animals they encounter. These barbarians believe that spirits inhabit the plants and animals of the world, and the barbarians look to them for omens and power.",
                                "Other barbarians trust only in the blood that runs in their veins and the steel they hold in their hands. They have no use for the invisible world, instead relying on their senses to hunt and survive like the wild beasts they emulate.",
                                "Both of these attitudes can give rise to superstitions. These beliefs are often passed down within a family or shared among the members of a clan or a hunting group.",
                                "If your barbarian character has any superstitions, were they ingrained in you by your family, or are they the result of personal experience?",
                                {
                                    "type": "table",
                                    "caption": "Superstition",
                                    "colLabels": [
                                        "{@dice d6}",
                                        "Superstition"
                                    ],
                                    "colStyles": [
                                        "col-1 text-center",
                                        "col-11"
                                    ],
                                    "rows": [
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 1
                                                }
                                            },
                                            "If you disturb the bones of the dead, you inherit all the troubles that plagued them in life."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 2
                                                }
                                            },
                                            "Never trust a wizard. They're all devils in disguise, especially the friendly ones."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 3
                                                }
                                            },
                                            "Dwarves have lost their spirits, and are almost like the undead. That's why they live underground."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 4
                                                }
                                            },
                                            "Magical things bring trouble. Never sleep with a magic object within ten feet of you."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 5
                                                }
                                            },
                                            "When you walk through a graveyard, be sure to wear silver, or a ghost might jump into your body."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 6
                                                }
                                            },
                                            "If an elf looks you in the eyes, she's trying to read your thoughts."
                                        ]
                                    ]
                                }
                            ]
                        }
                    ],
                    "source": "XGE",
                    "page": 8
                }
            ]
        }
    ],
    "classFeature": [
        []
    ],
    "subclassFeature": [
        []
    ]
};

function returnClass(){
    return classObj;
}