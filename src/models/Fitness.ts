interface FitnessModel {
  name: string;
  exercies: string[];
}

const FitnessData = [
  {
    'name': 'Abdominaux',
    'exercies': [
      'AB_Coaster.jpg',
      'Bear_plank_avec_kickback.jpg',
      'Cercles_jambes_tendues.jpg',
      'Ciseaux.jpg',
      'Cocon.jpg',
      'Crunch.jpg',
      'Crunch_avec_jambes_verticales.jpg',
      'Crunch_avec_sangles_de_suspension.jpg',
      'Crunch_bicyclette.jpg',
      'Crunch_debout_avec_élastique.jpg',
      'Crunch_papillon.jpg',
      'Crunch_sur_swiss_ball.jpg',
      'Crunch_à_la_machine.jpg',
      'Crunch_à_la_poulie.jpg',
      'Crunch_à_la_poulie_pour_les_obliques.jpg',
      'Dead_bug.jpg',
      'Dragon_flag.jpg',
      'Flexions_des_obliques_au_banc_à_lombaire_à_45°.jpg',
      'Flexions_latérales_avec_haltère.jpg',
      'Flexions_latérales_à_la_poulie_basse.jpg',
      'Hollow_hold.jpg',
      'Jackknife_sur_swiss_ball.jpg',
      'Mountain_climber.jpg',
      'Planche.jpg',
      'Planche_avec_sangles_de_suspension.jpg',
      "Planche_de_l'ours.jpg",
      'Planche_inversée.jpg',
      'Planche_latérale.jpg',
      'Planche_latérale_avec_rotation.jpg',
      'Planche_sur_Swiss_ball.jpg',
      'Relevé_de_genoux_suspendu.jpg',
      'Relevé_de_jambes_assis.jpg',
      'Relevé_de_jambes_suspendu.jpg',
      'Relevé_de_jambes_à_la_chaise_romaine.jpg',
      'Rotations_des_abdominaux_suspendu.jpg',
      'Rotations_du_buste_avec_barre.jpg',
      'Rotations_du_buste_avec_landmine.jpg',
      'Rotations_russes.jpg',
      'Rotation_du_buste_avec_élastique.jpg',
      'Rotation_du_buste_debout_à_la_poulie.jpg',
      'Roulage_avec_une_barre.jpg',
      'Roulette_à_abdominaux.jpg',
      'Russian_twists_à_la_poulie_sur_Swiss_ball.jpg',
      'Sit-up_avec_médecine_ball_contre_un_mur.jpg',
      'Sit-up_décliné.jpg',
      'Sits-up_à_la_chaise_romaine.jpg',
      'Touche_talon_alternés.jpg',
      'Windmill.jpg',
      'Zercher_carry.jpg'
    ]
  },
  {
    'name': 'Biceps',
    'exercies': [
      'Curl_allongé_à_la_poulie.jpg',
      'Curl_au_pupitre_à_la_poulie.jpg',
      'Curl_avec_sangles_de_suspension.jpg',
      'Curl_biceps_alterné_avec_haltères.jpg',
      'Curl_biceps_alterné_en_supination_sur_banc_incliné.jpg',
      'Curl_biceps_assis_à_la_machine.jpg',
      'Curl_biceps_à_la_poulie_basse.jpg',
      'Curl_concentré.jpg',
      'Curl_en_prise_marteau_avec_élastique.jpg',
      'Curl_haltères_prise_neutre.jpg',
      'Curl_haltère_debout_sur_banc_incliné.jpg',
      'Curl_haltère_incliné_avec_rotation.jpg',
      'Curl_haltère_prise_marteau_au_pupitre.jpg',
      'Curl_incliné_à_la_poulie.jpg',
      'Curl_inversé_à_la_barre.jpg',
      'Curl_poulie_en_position_squat.jpg',
      'Curl_pupitre_barre_EZ.jpg',
      'Curl_Spider.jpg',
      'Curl_unilatéral_avec_sangles_de_suspension.jpg',
      'Curl_Zottman.jpg',
      'Curl_à_la_barre.jpg',
      'Curl_à_la_poulie_vis-à-vis.jpg',
      'Drag_curl.jpg',
      'Drag_curl_avec_haltères.jpg',
      'Drag_curl_à_la_Smith_machine.jpg',
      'Traction_supination.jpg',
      'Waiter_curl.jpg'
    ]
  },
  {
    'name': 'Dos',
    'exercies': [
      'Bent_over_row_prise_disque.jpg',
      'Bird_dog.jpg',
      'Extensions_lombaires_sur_Swiss_ball.jpg',
      'Extension_lombaire_au_banc_à_45°.jpg',
      'Extension_lombaire_à_la_machine.jpg',
      'Montée_à_la_corde.jpg',
      'Muscle-up.jpg',
      'Oiseau_inversé_avec_sangles_de_suspension.jpg',
      'Overhead_shrug.jpg',
      'Planche_inversée.jpg',
      'Pull-over_assis_à_la_machine.jpg',
      'Pull-over_avec_barre.jpg',
      'Pull-over_décliné_à_la_barre.jpg',
      'Pull-over_à_la_poulie.jpg',
      'Pullover_avec_deux_haltères.jpg',
      'Pullover_avec_haltère.jpg',
      'Renegade_row.jpg',
      'Rowing_avec_haltères.jpg',
      'Rowing_avec_sangles_de_suspension.jpg',
      'Rowing_barre.jpg',
      'Rowing_buste_penché_avec_élastique.jpg',
      'Rowing_en_prise_neutre_assis_à_la_machine.jpg',
      'Rowing_en_pronation_assis_à_la_machine_Technogym.jpg',
      'Rowing_haltères_sur_banc_incliné.jpg',
      'Rowing_haltère_à_un_bras.jpg',
      'Rowing_inversé_sous_une_table.jpg',
      'Rowing_unilatéral_avec_élastique.jpg',
      'Rowing_unilatéral_à_la_landmine.jpg',
      'Rowing_à_la_barre_en_T_avec_machine.jpg',
      'Rowing_à_la_Smith_machine.jpg',
      'Rowing_T-bar.jpg',
      'Seal_row_avec_haltères.jpg',
      'Shrugs_avec_haltères.jpg',
      'Shrug_barre.jpg',
      'Shrug_à_la_machine_à_mollets.jpg',
      'Shrug_à_la_poulie.jpg',
      'Soulevé_de_terre.jpg',
      'Soulevé_de_terre_avec_machine.jpg',
      'Superman.jpg',
      'Tirage_horizontal_avec_élastique.jpg',
      'Tirage_horizontal_prise_large.jpg',
      'Tirage_horizontal_à_la_poulie.jpg',
      'Tirage_incliné_à_la_poulie_haute.jpg',
      'Tirage_vertical_en_supination_à_la_machine_Hammer_Strength.jpg',
      'Tirage_vertical_poitrine.jpg',
      'Tirage_vertical_prise_inversée.jpg',
      'Tirage_vertical_prise_serrée.jpg',
      'Traction.jpg',
      'Tractions_australiennes.jpg',
      'Tractions_australiennes_avec_sangles_de_suspension.jpg',
      'Tractions_prise_neutre.jpg',
      'Traction_assistée_avec_banc.jpg',
      'Traction_assistée_avec_élastique.jpg',
      'Traction_assistée_à_la_machine.jpg',
      'Traction_lestée.jpg',
      'Traction_supination.jpg'
    ]
  },
  {
    'name': 'Exercices_au_poids_de_corps',
    'exercies': [
      'Bear_plank_avec_kickback.jpg',
      'Chest_press_avec_sangles_de_suspension.jpg',
      'Cocon.jpg',
      'Crunch.jpg',
      'Crunch_avec_sangles_de_suspension.jpg',
      'Crunch_sur_swiss_ball.jpg',
      'Curl_avec_sangles_de_suspension.jpg',
      'Curl_unilatéral_avec_sangles_de_suspension.jpg',
      'Dips_aux_anneaux.jpg',
      'Dips_aux_barres_parallèles.jpg',
      'Dips_entre_deux_bancs.jpg',
      'Dips_sur_banc.jpg',
      'Dips_sur_une_chaise.jpg',
      'Donkey_kick.jpg',
      'Dragon_flag.jpg',
      'Extensions_des_mollets_sur_une_marche.jpg',
      'Extensions_des_triceps_avec_sangles_de_suspension.jpg',
      'Extensions_lombaires_sur_Swiss_ball.jpg',
      'Fire_hydrant.jpg',
      'Handstand_push-up.jpg',
      'Hip_thrust_avec_sangles_de_suspension.jpg',
      'Hollow_hold.jpg',
      'Hyperextension_inversée_au_Swiss_ball.jpg',
      'Jackknife_sur_swiss_ball.jpg',
      'Leg_curl_au_ballon_de_gym.jpg',
      'Leg_curl_avec_sangles_de_suspension.jpg',
      'Montée_à_la_corde.jpg',
      'Mountain_climber.jpg',
      'Muscle-up.jpg',
      'Oiseau_inversé_avec_sangles_de_suspension.jpg',
      'Pistol_squat.jpg',
      'Planche_avec_sangles_de_suspension.jpg',
      "Planche_de_l'ours.jpg",
      'Planche_latérale.jpg',
      'Planche_sur_Swiss_ball.jpg',
      'Pompes.jpg',
      'Pompes_piquées.jpg',
      'Relevé_de_genoux_suspendu.jpg',
      'Relevé_de_jambes_assis.jpg',
      'Relevé_de_jambes_suspendu.jpg',
      'Relevé_de_jambes_à_la_chaise_romaine.jpg',
      'Rotations_des_abdominaux_suspendu.jpg',
      'Rotations_russes.jpg',
      'Roulette_à_abdominaux.jpg',
      'Rowing_avec_sangles_de_suspension.jpg',
      'Rowing_inversé_sous_une_table.jpg',
      'Sissy_squat_sans_machine.jpg',
      'Sit-up_décliné.jpg',
      'Sits-up_à_la_chaise_romaine.jpg',
      'Split_squat_avec_sangles_de_suspension.jpg',
      'Squat_avec_sangles_de_suspension.jpg',
      'Squat_pistolet_avec_sangle_de_suspension.jpg',
      'Squat_sauté.jpg',
      'Squat_statique_contre_un_mur_(exercice_de_la_chaise).jpg',
      'Superman.jpg',
      'Traction.jpg',
      'Tractions_australiennes.jpg',
      'Tractions_australiennes_avec_sangles_de_suspension.jpg',
      'Tractions_prise_neutre.jpg',
      'Traction_assistée_avec_banc.jpg',
      'Traction_assistée_avec_élastique.jpg',
      'Traction_supination.jpg',
      'Écartés_avec_sangles_de_suspension.jpg'
    ]
  },
  {
    'name': 'Exercices_avec_barre',
    'exercies': [
      'Barre_front.jpg',
      'Bent_over_row_prise_disque.jpg',
      'Clean_and_jerk_(épaulé-jeté).jpg',
      'Curl_inversé_à_la_barre.jpg',
      'Curl_pupitre_barre_EZ.jpg',
      'Curl_Spider.jpg',
      'Curl_à_la_barre.jpg',
      'Drag_curl.jpg',
      'Développé_couché.jpg',
      'Développé_couché_au_sol.jpg',
      'Développé_couché_avec_chaînes.jpg',
      'Développé_couché_Larsen.jpg',
      'Développé_couché_prise_inversée.jpg',
      'Développé_décliné_à_la_barre.jpg',
      'Développé_incliné_à_la_barre.jpg',
      'Développé_militaire.jpg',
      'Extensions_des_mollets_assis_avec_barre.jpg',
      'Extension_des_mollets_à_la_barre_debout.jpg',
      'Extension_verticale_assis_à_la_barre.jpg',
      'Fentes_avant_avec_barre.jpg',
      'Good_morning.jpg',
      'Hip_thrust.jpg',
      'Hip_thrust_unilatéral.jpg',
      'Jefferson_squat.jpg',
      'Montées_sur_banc_latérales_avec_barre.jpg',
      'Overhead_shrug.jpg',
      'Overhead_squat.jpg',
      'Pin_squat.jpg',
      'Pull-over_avec_barre.jpg',
      'Pull-over_décliné_à_la_barre.jpg',
      'Rack_Pull.jpg',
      'Reeves_deadlift.jpg',
      'Rotations_du_buste_avec_barre.jpg',
      'Roulage_avec_une_barre.jpg',
      'Rowing_barre.jpg',
      'Safety_bar_squat.jpg',
      'Shrug_barre.jpg',
      'Sissy_squat_avec_machine.jpg',
      'Snatch_(arraché).jpg',
      'Soulevé_de_terre.jpg',
      'Soulevé_de_terre_avec_déficit.jpg',
      'Soulevé_de_terre_jambes_tendues.jpg',
      'Soulevé_de_terre_roumain.jpg',
      'Soulevé_de_terre_sumo.jpg',
      'Soulevé_de_terre_à_la_trap_bar.jpg',
      'Squat.jpg',
      'Squat_barre_devant.jpg',
      'Squat_sur_banc.jpg',
      'Thruster.jpg',
      'Zercher_carry.jpg',
      'Zercher_deadlift.jpg',
      'Zercher_Squat.jpg'
    ]
  },
  {
    'name': 'Exercices_avec_kettlebell',
    'exercies': [
      'Développé_couché_au_sol_avec_kettlebell.jpg',
      'Développé_couché_unilatéral_avec_kettlebell.jpg',
      'Développé_épaule_avec_kettlebell.jpg',
      'Fentes_avant_avec_kettlebell.jpg',
      'Kettlebell_swing.jpg',
      'Soulevé_de_terre_roumain_avec_kettlebell.jpg',
      'Soulevé_de_terre_sumo_avec_kettlebell.jpg',
      'Soulevé_de_terre_valise.jpg',
      'Squat_avant_avec_double_kettlebell.jpg',
      'Squat_goblet_avec_kettlebell.jpg',
      'Thruster_avec_kettlebell.jpg',
      'Tirage_menton_avec_kettlebell.jpg',
      'Élévations_latérales_avec_kettlebell.jpg'
    ]
  },
  {
    'name': 'Exercices_avec_haltères',
    'exercies': [
      'Croix_de_fer_avec_haltères.jpg',
      'Curl_biceps_alterné_avec_haltères.jpg',
      'Curl_biceps_alterné_en_supination_sur_banc_incliné.jpg',
      'Curl_concentré.jpg',
      'Curl_haltères_prise_neutre.jpg',
      'Curl_haltère_debout_sur_banc_incliné.jpg',
      'Curl_haltère_incliné_avec_rotation.jpg',
      'Curl_haltère_prise_marteau_au_pupitre.jpg',
      'Curl_Zottman.jpg',
      'Drag_curl_avec_haltères.jpg',
      'Développé_Arnold.jpg',
      'Développé_couché_haltères.jpg',
      'Développé_couché_serré_avec_haltères.jpg',
      'Développé_décliné_avec_haltère.jpg',
      'Développé_incliné_avec_haltères.jpg',
      'Développé_épaules_avec_haltères.jpg',
      'Extensions_des_triceps_assis_avec_haltère.jpg',
      'Extensions_des_triceps_couché_avec_haltères.jpg',
      'Extensions_des_triceps_décliné_avec_haltères.jpg',
      'Extensions_des_triceps_incliné_avec_haltères.jpg',
      "Extensions_verticales_d'un_bras_avec_haltère.jpg",
      'Extensions_verticales_à_deux_mains_avec_haltère.jpg',
      'Fentes_avant_avec_haltères.jpg',
      'Flexions_latérales_avec_haltère.jpg',
      'Front_squat_avec_haltères.jpg',
      'Goblet_squat_avec_haltère.jpg',
      'Kickback.jpg',
      'Kickback_alterné_assis.jpg',
      'Kickback_debout_avec_haltères.jpg',
      'Leg_curl_décliné_avec_haltère.jpg',
      'Montées_sur_banc.jpg',
      'Montées_sur_banc_latérales_avec_haltères.jpg',
      'Oiseau_assis_sur_un_banc.jpg',
      'Overhead_squat_avec_haltères.jpg',
      'Pullover_avec_deux_haltères.jpg',
      'Pullover_avec_haltère.jpg',
      'Renegade_row.jpg',
      'Rotations_cubaines.jpg',
      "Rotation_externe_de_l'épaule_couchée_avec_haltère.jpg",
      'Rowing_avec_haltères.jpg',
      'Rowing_haltères_sur_banc_incliné.jpg',
      'Rowing_haltère_à_un_bras.jpg',
      'Seal_row_avec_haltères.jpg',
      'Shrugs_avec_haltères.jpg',
      'Squat_bulgare_avec_haltères.jpg',
      'Squat_cosaque.jpg',
      'Squat_sumo_avec_haltère.jpg',
      'Tate_press_à_un_bras_avec_haltère.jpg',
      'Waiter_curl.jpg',
      'Windmill.jpg',
      'Écartés_couché_avec_haltères.jpg',
      'Écartés_décliné_avec_haltères.jpg',
      'Écartés_Hyght.jpg',
      'Écartés_incliné_avec_haltères.jpg',
      'Élévations_frontales.jpg',
      'Élévations_latérales.jpg',
      'Élévations_latérales_inclinées_avec_haltère.jpg'
    ]
  },
  {
    'name': 'Exercices_avec_landmine',
    'exercies': [
      'Développé_à_la_landmine_à_genoux_pour_les_pectoraux.jpg',
      'Développé_épaules_debout_à_la_landmine.jpg',
      'Développé_épaule_unilatéral_à_genou_avec_landmine.jpg',
      'Fentes_inversées_avec_landmine.jpg',
      'Rotations_du_buste_avec_landmine.jpg',
      'Rowing_unilatéral_à_la_landmine.jpg',
      'Rowing_T-bar.jpg',
      'Soulevé_de_terre_roumain_à_la_landmine.jpg',
      'Squat_avec_landmine.jpg',
      'Squat_sumo_à_la_landmine.jpg',
      'Thruster_avec_landmine.jpg',
      'Écartés_unilatéraux_à_la_landmine.jpg',
      'Élévations_latérales_avec_landmine.jpg'
    ]
  },
  {
    'name': 'Exercices_avec_la_smith_machine',
    'exercies': [
      'Drag_curl_à_la_Smith_machine.jpg',
      'Développé_couché_prise_serrée_à_la_Smith_machine.jpg',
      'Développé_couché_à_la_Smith_machine.jpg',
      'Développé_nuque_barre_guidée.jpg',
      'Développé_épaules_à_la_Smith_machine.jpg',
      'Extensions_des_mollets_assis_à_la_Smith_machine.jpg',
      'Extensions_des_mollets_debout_à_la_Smith_machine.jpg',
      'Extensions_des_triceps_incliné_à_la_Smith_machine.jpg',
      'Hex_press_à_la_Smith_machine.jpg',
      'Hip_thrust_à_la_smith_machine.jpg',
      'Rowing_à_la_Smith_machine.jpg',
      'Split_squat_à_la_Smith_machine.jpg',
      'Squat_à_la_Smith_machine.jpg',
      'Tirage_menton_barre_guidée.jpg'
    ]
  },
  {
    'name': 'Exercices_avec_machine',
    'exercies': [
      'AB_Coaster.jpg',
      'Belt_squat.jpg',
      'Crunch_à_la_machine.jpg',
      'Curl_biceps_assis_à_la_machine.jpg',
      'Dips_assistés_à_la_machine.jpg',
      'Dips_assis_à_la_machine_Hammer_Strength.jpg',
      'Dips_assis_à_la_machine_Matrix.jpg',
      'Développé_assis_à_la_machine_pour_les_pectoraux.jpg',
      'Développé_incliné_à_la_machine_convergente.jpg',
      'Développé_épaules_à_la_machine.jpg',
      'Extensions_des_mollets_au_hack-squat.jpg',
      'Extensions_des_mollets_avec_partenaire.jpg',
      'Extensions_des_mollets_debout_à_la_machine.jpg',
      'Extensions_des_triceps_à_la_machine_Technogym.jpg',
      'Extensions_de_hanches_au_GHD.jpg',
      'Extension_des_mollets_assis_à_la_machine.jpg',
      'Extension_des_mollets_à_la_presse.jpg',
      'Extension_de_jambe_unilatérale_sur_une_machine_à_dips_assistés.jpg',
      'Extension_lombaire_au_banc_à_45°.jpg',
      'Extension_lombaire_à_la_machine.jpg',
      'Flexions_des_obliques_au_banc_à_lombaire_à_45°.jpg',
      'Hack_squat.jpg',
      'Hack_squat_inversé.jpg',
      'Hip_thrust_à_la_machine.jpg',
      'Leg_curl_allongé.jpg',
      'Leg_curl_assis_à_la_machine.jpg',
      'Leg_curl_inversé_sur_le_tirage_vertical.jpg',
      'Leg_curl_unilatéral_debout_à_la_machine.jpg',
      'Leg_extension.jpg',
      'Leg_extension_iso_latéral_unilatéral_Hammer_strenght.jpg',
      'Pec-deck_ou_butterfly.jpg',
      'Pec_deck_inversé.jpg',
      'Pendulum_squat.jpg',
      'Power_sled_(chariot_de_puissance).jpg',
      'Presse_à_cuisses_horizontale.jpg',
      'Presse_à_cuisses_inclinée.jpg',
      'Presse_à_cuisses_iso-latérale.jpg',
      'Presse_à_cuisses_verticale.jpg',
      'Presse_à_épaules_inclinée.jpg',
      'Pull-over_assis_à_la_machine.jpg',
      'Reverse_hyperextension.jpg',
      'Rowing_en_prise_neutre_assis_à_la_machine.jpg',
      'Rowing_en_pronation_assis_à_la_machine_Technogym.jpg',
      'Rowing_à_la_barre_en_T_avec_machine.jpg',
      'Shrug_à_la_machine_à_mollets.jpg',
      'Soulevé_de_terre_avec_machine.jpg',
      'Tirage_vertical_en_supination_à_la_machine_Hammer_Strength.jpg',
      'Traction_assistée_à_la_machine.jpg',
      'Élévations_des_mollets_au_Donkey.jpg',
      'Élévations_latérales_à_la_machine.jpg'
    ]
  },
  {
    'name': 'Exercices_avec_élastique',
    'exercies': [
      'Crunch_debout_avec_élastique.jpg',
      'Curl_en_prise_marteau_avec_élastique.jpg',
      'Développé_debout_avec_élastique.jpg',
      'Développé_décliné_avec_élastique.jpg',
      'Développé_épaules_assis_avec_élastique.jpg',
      'Développé_épaules_avec_élastique.jpg',
      'Développé_épaule_unilatéral_avec_élastique.jpg',
      'Extension_des_triceps_au-dessus_de_la_tête_avec_élastique.jpg',
      'Extension_horizontale_des_épaules_avec_élastique.jpg',
      'Extension_verticale_des_triceps_avec_élastique.jpg',
      'Good_morning_avec_élastique.jpg',
      'Hip_thrusts_à_genoux_avec_élastique.jpg',
      'Leg_curl_allongé_avec_élastique.jpg',
      'Marche_avec_élastique.jpg',
      'Nordic_hamstring_curl_avec_élastique.jpg',
      'Oiseau_avec_élastique.jpg',
      'Overhead_squat_avec_élastique.jpg',
      'Pull_through_avec_élastique.jpg',
      'Rotation_du_buste_avec_élastique.jpg',
      'Rowing_buste_penché_avec_élastique.jpg',
      'Rowing_unilatéral_avec_élastique.jpg',
      'Split_squat_avec_élastique.jpg',
      'Squat_avec_élastique.jpg',
      'Tirage_horizontal_avec_élastique.jpg',
      'Tirage_menton_avec_élastique.jpg',
      'Traction_assistée_avec_élastique.jpg',
      'Écartés_avec_élastique.jpg'
    ]
  },
  {
    'name': 'Exercices_sans_matériel',
    'exercies': [
      'Air_Squat.jpg',
      'Bird_dog.jpg',
      'Cercles_jambes_tendues.jpg',
      'Ciseaux.jpg',
      'Cocon.jpg',
      'Crunch.jpg',
      'Crunch_avec_jambes_verticales.jpg',
      'Crunch_bicyclette.jpg',
      'Crunch_papillon.jpg',
      'Dead_bug.jpg',
      'Donkey_kick.jpg',
      'Extensions_des_mollets_sur_une_marche.jpg',
      'Fire_hydrant.jpg',
      'Handstand_push-up.jpg',
      'Hollow_hold.jpg',
      "Marche_de_l'ours.jpg",
      'Mountain_climber.jpg',
      'Pistol_squat.jpg',
      'Planche.jpg',
      "Planche_de_l'ours.jpg",
      'Planche_inversée.jpg',
      'Planche_latérale.jpg',
      'Planche_latérale_avec_rotation.jpg',
      'Pompes.jpg',
      'Squat_sauté.jpg',
      'Squat_statique_contre_un_mur_(exercice_de_la_chaise).jpg',
      'Superman.jpg',
      'Touche_talon_alternés.jpg'
    ]
  },
  {
    'name': 'Exercices_à_la_poulie',
    'exercies': [
      'Crunch_à_la_poulie.jpg',
      'Crunch_à_la_poulie_pour_les_obliques.jpg',
      'Curl_allongé_à_la_poulie.jpg',
      'Curl_au_pupitre_à_la_poulie.jpg',
      'Curl_biceps_à_la_poulie_basse.jpg',
      'Curl_incliné_à_la_poulie.jpg',
      'Curl_poulie_en_position_squat.jpg',
      'Curl_à_la_poulie_vis-à-vis.jpg',
      'Développé_incliné_à_la_poulie.jpg',
      'Extensions_concentrées_des_triceps_à_la_poulie.jpg',
      'Extensions_des_triceps_incliné_à_la_poulie_basse.jpg',
      'Extensions_des_triceps_à_la_poulie_haute_à_la_corde.jpg',
      'Extensions_verticales_à_la_poulie_haute.jpg',
      'Extension_de_la_hanche_à_la_poulie_basse.jpg',
      'Extension_horizontale_à_la_poulie.jpg',
      'Extension_verticale_à_la_poulie_basse.jpg',
      'Face_pull.jpg',
      'Flexions_latérales_à_la_poulie_basse.jpg',
      'Pull-over_à_la_poulie.jpg',
      'Pull_through_à_la_poulie.jpg',
      'Rotation_du_buste_debout_à_la_poulie.jpg',
      "Rotation_externe_de_l'épaule_à_la_poulie.jpg",
      'Russian_twists_à_la_poulie_sur_Swiss_ball.jpg',
      'Shrug_à_la_poulie.jpg',
      'Tirage_horizontal_prise_large.jpg',
      'Tirage_horizontal_à_la_poulie.jpg',
      'Tirage_incliné_à_la_poulie_haute.jpg',
      'Tirage_vertical_poitrine.jpg',
      'Tirage_vertical_prise_inversée.jpg',
      'Tirage_vertical_prise_serrée.jpg',
      'Écartés_couché_à_la_poulie_vis-à-vis.jpg',
      'Écartés_à_la_poulie_haute.jpg',
      'Écartés_à_la_poulie_vis-à-vis.jpg',
      'Écarté_unilatéral_à_la_poulie.jpg',
      'Écarté_à_la_poulie_vis_à_vis_haute_à_genoux.jpg',
      'Élévations_frontales_à_la_poulie_basse.jpg',
      'Élévations_latérales_unilatérales_à_la_poulie.jpg',
      'Élévations_latérales_à_la_poulie.jpg'
    ]
  },
  {
    'name': 'Fessiers',
    'exercies': [
      'Bear_plank_avec_kickback.jpg',
      'Bird_dog.jpg',
      'Donkey_kick.jpg',
      'Extensions_de_hanches_au_GHD.jpg',
      'Extension_de_jambe_unilatérale_sur_une_machine_à_dips_assistés.jpg',
      'Extension_de_la_hanche_à_la_poulie_basse.jpg',
      'Extension_lombaire_au_banc_à_45°.jpg',
      'Fentes_avant_avec_barre.jpg',
      'Fentes_avant_avec_haltères.jpg',
      'Fentes_avant_avec_kettlebell.jpg',
      'Fire_hydrant.jpg',
      'Front_squat_avec_haltères.jpg',
      'Goblet_squat_avec_haltère.jpg',
      'Good_morning.jpg',
      'Good_morning_avec_élastique.jpg',
      'Hack_squat.jpg',
      'Hack_squat_inversé.jpg',
      'Hip_thrust.jpg',
      'Hip_thrusts_à_genoux_avec_élastique.jpg',
      'Hip_thrust_avec_sangles_de_suspension.jpg',
      'Hip_thrust_unilatéral.jpg',
      'Hip_thrust_à_la_machine.jpg',
      'Hip_thrust_à_la_smith_machine.jpg',
      'Hyperextension_inversée_au_Swiss_ball.jpg',
      'Kettlebell_swing.jpg',
      'Marche_avec_élastique.jpg',
      'Montées_sur_banc.jpg',
      'Montées_sur_banc_latérales_avec_barre.jpg',
      'Montées_sur_banc_latérales_avec_haltères.jpg',
      'Pin_squat.jpg',
      'Pistol_squat.jpg',
      'Planche_inversée.jpg',
      'Presse_à_cuisses_horizontale.jpg',
      'Presse_à_cuisses_verticale.jpg',
      'Pull_through_avec_élastique.jpg',
      'Pull_through_à_la_poulie.jpg',
      'Rack_Pull.jpg',
      'Reverse_hyperextension.jpg',
      'Soulevé_de_terre.jpg',
      'Soulevé_de_terre_avec_machine.jpg',
      'Soulevé_de_terre_roumain.jpg',
      'Soulevé_de_terre_roumain_avec_kettlebell.jpg',
      'Soulevé_de_terre_roumain_à_la_landmine.jpg',
      'Soulevé_de_terre_sumo_avec_kettlebell.jpg',
      'Soulevé_de_terre_valise.jpg',
      'Squat.jpg',
      'Squat_avec_landmine.jpg',
      'Squat_avec_sangles_de_suspension.jpg',
      'Squat_barre_devant.jpg',
      'Squat_bulgare_avec_haltères.jpg',
      'Squat_cosaque.jpg',
      'Squat_goblet_avec_kettlebell.jpg',
      'Squat_sauté.jpg',
      'Squat_sumo_avec_haltère.jpg',
      'Squat_sumo_à_la_landmine.jpg',
      'Thruster.jpg',
      'Thruster_avec_kettlebell.jpg',
      'Zercher_deadlift.jpg',
      'Zercher_Squat.jpg'
    ]
  },
  {
    'name': 'Mollets',
    'exercies': [
      'Extensions_des_mollets_assis_avec_barre.jpg',
      'Extensions_des_mollets_assis_à_la_Smith_machine.jpg',
      'Extensions_des_mollets_au_hack-squat.jpg',
      'Extensions_des_mollets_avec_partenaire.jpg',
      'Extensions_des_mollets_debout_à_la_machine.jpg',
      'Extensions_des_mollets_debout_à_la_Smith_machine.jpg',
      'Extensions_des_mollets_sur_une_marche.jpg',
      'Extension_des_mollets_assis_à_la_machine.jpg',
      'Extension_des_mollets_à_la_barre_debout.jpg',
      'Extension_des_mollets_à_la_presse.jpg',
      'Élévations_des_mollets_au_Donkey.jpg'
    ]
  },
  {
    'name': 'Ischio-jambiers',
    'exercies': [
      'Extensions_de_hanches_au_GHD.jpg',
      'Extension_lombaire_au_banc_à_45°.jpg',
      'Fentes_avant_avec_barre.jpg',
      'Fentes_avant_avec_kettlebell.jpg',
      'Front_squat_avec_haltères.jpg',
      'Good_morning.jpg',
      'Good_morning_avec_élastique.jpg',
      'Kettlebell_swing.jpg',
      'Leg_curl_allongé.jpg',
      'Leg_curl_allongé_avec_élastique.jpg',
      'Leg_curl_assis_à_la_machine.jpg',
      'Leg_curl_au_ballon_de_gym.jpg',
      'Leg_curl_avec_sangles_de_suspension.jpg',
      'Leg_curl_décliné_avec_haltère.jpg',
      'Leg_curl_inversé_sur_le_tirage_vertical.jpg',
      'Leg_curl_unilatéral_debout_à_la_machine.jpg',
      'Nordic_hamstring_curl_avec_élastique.jpg',
      'Pistol_squat.jpg',
      'Presse_à_cuisses_inclinée.jpg',
      'Presse_à_cuisses_verticale.jpg',
      'Rack_Pull.jpg',
      'Reeves_deadlift.jpg',
      'Soulevé_de_terre.jpg',
      'Soulevé_de_terre_avec_déficit.jpg',
      'Soulevé_de_terre_avec_machine.jpg',
      'Soulevé_de_terre_jambes_tendues.jpg',
      'Soulevé_de_terre_roumain_avec_kettlebell.jpg',
      'Soulevé_de_terre_roumain_à_la_landmine.jpg',
      'Soulevé_de_terre_sumo.jpg',
      'Soulevé_de_terre_sumo_avec_kettlebell.jpg',
      'Soulevé_de_terre_valise.jpg',
      'Soulevé_de_terre_à_la_trap_bar.jpg',
      'Squat.jpg',
      'Squat_goblet_avec_kettlebell.jpg',
      'Squat_sumo_avec_haltère.jpg',
      'Squat_sumo_à_la_landmine.jpg',
      'Zercher_deadlift.jpg'
    ]
  },
  {
    'name': 'Pectoraux',
    'exercies': [
      'Chest_press_avec_sangles_de_suspension.jpg',
      'Dips_aux_barres_parallèles.jpg',
      'Développé_assis_à_la_machine_pour_les_pectoraux.jpg',
      'Développé_couché.jpg',
      'Développé_couché_au_sol.jpg',
      'Développé_couché_au_sol_avec_kettlebell.jpg',
      'Développé_couché_avec_chaînes.jpg',
      'Développé_couché_haltères.jpg',
      'Développé_couché_Larsen.jpg',
      'Développé_couché_prise_inversée.jpg',
      'Développé_couché_serré_avec_haltères.jpg',
      'Développé_couché_unilatéral_avec_kettlebell.jpg',
      'Développé_couché_à_la_Smith_machine.jpg',
      'Développé_debout_avec_élastique.jpg',
      'Développé_décliné_avec_haltère.jpg',
      'Développé_décliné_avec_élastique.jpg',
      'Développé_décliné_à_la_barre.jpg',
      'Développé_incliné_avec_haltères.jpg',
      'Développé_incliné_à_la_barre.jpg',
      'Développé_incliné_à_la_machine_convergente.jpg',
      'Développé_incliné_à_la_poulie.jpg',
      'Développé_à_la_landmine_à_genoux_pour_les_pectoraux.jpg',
      'Hex_press_à_la_Smith_machine.jpg',
      'Pec-deck_ou_butterfly.jpg',
      'Pompes.jpg',
      'Pullover_avec_haltère.jpg',
      'Svend_press.jpg',
      'Écartés_avec_sangles_de_suspension.jpg',
      'Écartés_avec_élastique.jpg',
      'Écartés_couché_avec_haltères.jpg',
      'Écartés_couché_à_la_poulie_vis-à-vis.jpg',
      'Écartés_décliné_avec_haltères.jpg',
      'Écartés_Hyght.jpg',
      'Écartés_incliné_avec_haltères.jpg',
      'Écartés_unilatéraux_à_la_landmine.jpg',
      'Écartés_à_la_poulie_haute.jpg',
      'Écartés_à_la_poulie_vis-à-vis.jpg',
      'Écarté_unilatéral_à_la_poulie.jpg',
      'Écarté_à_la_poulie_vis_à_vis_haute_à_genoux.jpg'
    ]
  },
  {
    'name': 'Squat',
    'exercies': [
      "L'impact_des_genouillères_en_néoprène_au_squat.jpg"
    ]
  },
  {
    'name': 'Quadriceps',
    'exercies': [
      'Air_Squat.jpg',
      'Belt_squat.jpg',
      'Croix_de_fer_avec_haltères.jpg',
      'Extension_de_jambe_unilatérale_sur_une_machine_à_dips_assistés.jpg',
      'Fentes_avant_avec_barre.jpg',
      'Fentes_avant_avec_haltères.jpg',
      'Fentes_avant_avec_kettlebell.jpg',
      'Fentes_inversées_avec_landmine.jpg',
      'Front_squat_avec_haltères.jpg',
      'Goblet_squat_avec_haltère.jpg',
      'Hack_squat.jpg',
      'Hack_squat_inversé.jpg',
      'Jefferson_squat.jpg',
      'Leg_extension.jpg',
      'Leg_extension_iso_latéral_unilatéral_Hammer_strenght.jpg',
      'Montées_sur_banc.jpg',
      'Montées_sur_banc_latérales_avec_barre.jpg',
      'Montées_sur_banc_latérales_avec_haltères.jpg',
      'Overhead_squat.jpg',
      'Overhead_squat_avec_haltères.jpg',
      'Overhead_squat_avec_élastique.jpg',
      'Pendulum_squat.jpg',
      'Pin_squat.jpg',
      'Pistol_squat.jpg',
      'Presse_à_cuisses_horizontale.jpg',
      'Presse_à_cuisses_inclinée.jpg',
      'Presse_à_cuisses_iso-latérale.jpg',
      'Presse_à_cuisses_verticale.jpg',
      'Safety_bar_squat.jpg',
      'Sissy_squat_avec_machine.jpg',
      'Sissy_squat_sans_machine.jpg',
      'Soulevé_de_terre.jpg',
      'Soulevé_de_terre_roumain_avec_kettlebell.jpg',
      'Soulevé_de_terre_sumo.jpg',
      'Soulevé_de_terre_sumo_avec_kettlebell.jpg',
      'Soulevé_de_terre_valise.jpg',
      'Soulevé_de_terre_à_la_trap_bar.jpg',
      'Split_squat_avec_sangles_de_suspension.jpg',
      'Split_squat_avec_élastique.jpg',
      'Split_squat_à_la_Smith_machine.jpg',
      'Squat.jpg',
      'Squat_avant_avec_double_kettlebell.jpg',
      'Squat_avec_landmine.jpg',
      'Squat_avec_sangles_de_suspension.jpg',
      'Squat_avec_élastique.jpg',
      'Squat_barre_devant.jpg',
      'Squat_bulgare_avec_haltères.jpg',
      'Squat_cosaque.jpg',
      'Squat_goblet_avec_kettlebell.jpg',
      'Squat_pistolet_avec_sangle_de_suspension.jpg',
      'Squat_sauté.jpg',
      'Squat_statique_contre_un_mur_(exercice_de_la_chaise).jpg',
      'Squat_sumo_avec_haltère.jpg',
      'Squat_sumo_à_la_landmine.jpg',
      'Squat_sur_banc.jpg',
      'Squat_à_la_Smith_machine.jpg',
      'Thruster.jpg',
      'Thruster_avec_kettlebell.jpg',
      'Thruster_avec_landmine.jpg',
      'Zercher_deadlift.jpg',
      'Zercher_Squat.jpg'
    ]
  },
  {
    'name': 'Épaules',
    'exercies': [
      'Croix_de_fer_avec_haltères.jpg',
      'Développé_Arnold.jpg',
      'Développé_militaire.jpg',
      'Développé_nuque_barre_guidée.jpg',
      'Développé_épaules_assis_avec_élastique.jpg',
      'Développé_épaules_avec_haltères.jpg',
      'Développé_épaules_avec_élastique.jpg',
      'Développé_épaules_debout_à_la_landmine.jpg',
      'Développé_épaules_à_la_machine.jpg',
      'Développé_épaules_à_la_Smith_machine.jpg',
      'Développé_épaule_avec_kettlebell.jpg',
      'Développé_épaule_unilatéral_avec_élastique.jpg',
      'Développé_épaule_unilatéral_à_genou_avec_landmine.jpg',
      'Extension_horizontale_des_épaules_avec_élastique.jpg',
      'Face_pull.jpg',
      'Handstand_push-up.jpg',
      'Oiseau_assis_sur_un_banc.jpg',
      'Oiseau_avec_élastique.jpg',
      'Oiseau_inversé_avec_sangles_de_suspension.jpg',
      'Pec_deck_inversé.jpg',
      'Pompes_piquées.jpg',
      'Presse_à_épaules_inclinée.jpg',
      'Rotations_cubaines.jpg',
      "Rotation_externe_de_l'épaule_couchée_avec_haltère.jpg",
      "Rotation_externe_de_l'épaule_à_la_poulie.jpg",
      'Thruster.jpg',
      'Thruster_avec_kettlebell.jpg',
      'Thruster_avec_landmine.jpg',
      'Tirage_menton_avec_kettlebell.jpg',
      'Tirage_menton_avec_élastique.jpg',
      'Tirage_menton_barre_guidée.jpg',
      'Élévations_frontales.jpg',
      'Élévations_frontales_à_la_poulie_basse.jpg',
      'Élévations_latérales.jpg',
      'Élévations_latérales_avec_kettlebell.jpg',
      'Élévations_latérales_avec_landmine.jpg',
      'Élévations_latérales_inclinées_avec_haltère.jpg',
      'Élévations_latérales_unilatérales_à_la_poulie.jpg',
      'Élévations_latérales_à_la_machine.jpg',
      'Élévations_latérales_à_la_poulie.jpg'
    ]
  },
  {
    'name': 'Triceps',
    'exercies': [
      'Barre_front.jpg',
      'Dips_assistés_à_la_machine.jpg',
      'Dips_assis_à_la_machine_Hammer_Strength.jpg',
      'Dips_assis_à_la_machine_Matrix.jpg',
      'Dips_aux_anneaux.jpg',
      'Dips_aux_barres_parallèles.jpg',
      'Dips_entre_deux_bancs.jpg',
      'Dips_sur_banc.jpg',
      'Dips_sur_une_chaise.jpg',
      'Développé_couché_prise_serrée_à_la_Smith_machine.jpg',
      'Extensions_concentrées_des_triceps_à_la_poulie.jpg',
      'Extensions_des_triceps_assis_avec_haltère.jpg',
      'Extensions_des_triceps_avec_sangles_de_suspension.jpg',
      'Extensions_des_triceps_couché_avec_haltères.jpg',
      'Extensions_des_triceps_décliné_avec_haltères.jpg',
      'Extensions_des_triceps_incliné_avec_haltères.jpg',
      'Extensions_des_triceps_incliné_à_la_poulie_basse.jpg',
      'Extensions_des_triceps_incliné_à_la_Smith_machine.jpg',
      'Extensions_des_triceps_à_la_machine_Technogym.jpg',
      'Extensions_des_triceps_à_la_poulie_haute_à_la_corde.jpg',
      "Extensions_verticales_d'un_bras_avec_haltère.jpg",
      'Extensions_verticales_à_deux_mains_avec_haltère.jpg',
      'Extensions_verticales_à_la_poulie_haute.jpg',
      'Extension_des_triceps_au-dessus_de_la_tête_avec_élastique.jpg',
      'Extension_horizontale_à_la_poulie.jpg',
      'Extension_verticale_assis_à_la_barre.jpg',
      'Extension_verticale_des_triceps_avec_élastique.jpg',
      'Extension_verticale_à_la_poulie_basse.jpg',
      'Handstand_push-up.jpg',
      'Kickback.jpg',
      'Kickback_alterné_assis.jpg',
      'Kickback_debout_avec_haltères.jpg',
      'Pompes.jpg',
      'Tate_press_à_un_bras_avec_haltère.jpg'
    ]
  }
] as FitnessModel[];

export { FitnessData };

export type { FitnessModel };
