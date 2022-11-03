<template>
  <div>
    <div v-for='qKey in keys' :key='qKey' style=" margin-right:20px; margin-bottom:10px;">
      <question :question='questions[qKey]' :questions="questions" v-if='qKey in questions && showMonitor(questions[qKey])' />
    </div>
  </div>
</template>
<script>
import question from './components/question';
export default {
  components: {
    question,
  },
  data() {
    return {
      keys:[
            "gender_cd",
            "mh_category_cd",
            "mh_sub_category_cd",
            "mh_term_cd"
            // "init_diagnosis_date",
            // "mh_category_cd_1",
            // "mh_sub_category_cd_1",
            // "mh_sub_category_cd_2",
            // "mh_sub_category_cd_3",
            // "mh_sub_category_cd_4",
            // "chab_cd_2",
            // "chab_sub_cd_1",
            // "chab_sub_cd_2",
            // "who_cd",
            // 'who_sub_cd',
            // "who_cd_9",
            // "who_cd_10",
            // "who_cd_11",
            // "condition_loc_cd_1",
            // "condition_loc_cd_2",
            // "condition_loc_cd_3",
            // "condition_loc_cd_4",
            // "condition_loc_cd_5",
            // "condition_loc_cd_6",
            // "condition_loc_cd_7",
            // "condition_loc_cd_8",
            // "regimen_change_reason_cd",
            // 'ae_ongoing_cd',
            // 'ae_severity_cd',
            // 'ae_yn_cd',
            // 'ae_trae_cd',
            // 'interv_em_yn',
            // 'interv_ip_yn',
            // 'interv_op_yn',
            // 'death_flag_cd',
            // 'death_reason_cd',
            // 'venue_of_death_cd',
            // 'binet_stage',
            // 'chab_cd',
            // 'ecog_cd',
            // 'extnd_cd',
            // 'extnd_sub_cd',
            // 'mutation_cd',
            // 'prog_risk_cd',
            // 'rai_stage',
            // 'complication_cd',
            // 'complication_detail_cd',
            // 'complication_grade_cd',
            // 'complication_trt_cd',
            // 'complication_yn_cd',
            // 'anti_fungal_cd',
            // 'anti_fungal_type_cd',
            // 'dli_trt_cd',
            // 'dli_trt_regimen_cd',
            // 'donor_type_cd',
            // 'fungal_inft_cd',
            // 'fungal_inft_site_cd',
            // 'hsct_plasma_cd',
            // 'hsct_rjct_cd',
            // 'hsct_type_sub_cd',
            // 'mesenchymal_sc_cd',
            // 'plant_act_dna_cd',
            // 'plant_act_neut_cd',
            // 'plant_act_plt_cd',
            // 'pr_hsct_trial_cd',
            // 'pretreat_cd',
            // 'pretreat_intense_cd',
            // 'pretreat_type_cd',
            // 'pretrt_tox_sub_type_cd',
            // 'pretrt_tox_type_cd',
            // 'condition_term_cd',
            // 'mh_category_cd',
            // 'mh_sub_category_cd',
            // 'mh_term_cd',
            // 'ndrr_cd',
            // 'prior_trial_cd',
            // 'progress_event_cd',
            // 'progress_yn_cd',
            // 'regimen_change_yn_cd',
            // 'cell_property_cd',
            // 'cell_source_cd',
            // 'mrd_result_cd',
            // 'response_result_cd',
            // 'test_method_cd',
            // 'visit_reason_cd',
            // 'visit_stage_cd',
            // 'visit_type_cd',
          ],
      questions: {
        "gender_cd":{
            "column_key": "gender_cd",
            "question_type": "list",
            "column_value": "",
            "title": "性别",
            "options":[{
                "item_type": "radio",
                "zh_cn": "男",
                "term_id": "gender_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "女",
                "term_id": "gender_cd_2",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "其他",
                "term_id": "gender_cd_99",
                "check_status": "false"
            }
          ],
        },
    "condition_loc_cd_7": {},
    "condition_loc_cd_6": {},
    "condition_loc_cd_5": {},
    "condition_loc_cd_4": {},
    "condition_loc_cd_3": {},
    "condition_loc_cd_2": {},
    "condition_loc_cd_1": {},
    "pretrt_tox_sub_type_cd": {
        "options": [
            {
                "item_type": "checkbox",
                "zh_cn": "\u610f\u8bc6\u4e0d\u6e05",
                "term_id": "pretrt_tox_sub_type_cd_21",
                "show": [
                    {
                        "pretrt_tox_type_cd": "pretrt_tox_type_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u7cdc\u70c2",
                "term_id": "pretrt_tox_sub_type_cd_31",
                "show": [
                    {
                        "pretrt_tox_type_cd": "pretrt_tox_type_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u660f\u8ff7",
                "term_id": "pretrt_tox_sub_type_cd_22",
                "show": [
                    {
                        "pretrt_tox_type_cd": "pretrt_tox_type_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6e83\u75a1",
                "term_id": "pretrt_tox_sub_type_cd_32",
                "show": [
                    {
                        "pretrt_tox_type_cd": "pretrt_tox_type_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u55dc\u7761",
                "term_id": "pretrt_tox_sub_type_cd_23",
                "show": [
                    {
                        "pretrt_tox_type_cd": "pretrt_tox_type_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u660f\u7761",
                "term_id": "pretrt_tox_sub_type_cd_24",
                "show": [
                    {
                        "pretrt_tox_type_cd": "pretrt_tox_type_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u62bd\u52a8",
                "term_id": "pretrt_tox_sub_type_cd_25",
                "show": [
                    {
                        "pretrt_tox_type_cd": "pretrt_tox_type_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u766b\u75eb",
                "term_id": "pretrt_tox_sub_type_cd_26",
                "show": [
                    {
                        "pretrt_tox_type_cd": "pretrt_tox_type_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u62bd\u6410",
                "term_id": "pretrt_tox_sub_type_cd_27",
                "show": [
                    {
                        "pretrt_tox_type_cd": "pretrt_tox_type_cd_2"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "pretrt_tox_sub_type_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u9884\u5904\u7406\u6bd2\u6027\u5b50\u5206\u7c7b"
    },
    "extnd_sub_cd": {
        "options": [
            {
                "item_type": "checkbox",
                "zh_cn": "\u4e2d\u67a2\u795e\u7ecf\u7cfb\u7edf\u767d\u8840\u75c5 (CNSL)",
                "term_id": "extnd_sub_cd_1",
                "show": [
                    {
                        "extnd_cd": "extnd_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u76ae\u80a4\u6d78\u6da6",
                "term_id": "extnd_sub_cd_2",
                "show": [
                    {
                        "extnd_cd": "extnd_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u9ad3\u7cfb\u8089\u7624",
                "term_id": "extnd_sub_cd_3",
                "show": [
                    {
                        "extnd_cd": "extnd_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u7eb5\u9694\u75be\u75c5",
                "term_id": "extnd_sub_cd_4",
                "show": [
                    {
                        "extnd_cd": "extnd_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u751f\u6b96\u7cfb\u7edf\u6d78\u6da6",
                "term_id": "extnd_sub_cd_5",
                "show": [
                    {
                        "extnd_cd": "extnd_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "zh_cn": "\u5176\u5b83",
                "term_id": "extnd_sub_cd_99",
                "item_type": "checkbox",
                "check_status": "false",
                "show": [
                    {
                        "extnd_cd": "extnd_cd_2"
                    }
                ],
                "other_key": "extnd_other"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u8bc4\u4f30",
                "term_id": "extnd_sub_cd_00",
                "show": [
                    {
                        "extnd_cd": "extnd_cd_2"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "extnd_sub_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u9ad3\u5916\u6d78\u6da6\u7c7b\u578b"
    },
    "hsct_type_sub_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u540c\u57fa\u56e0",
                "term_id": "hsct_type_sub_cd_21",
                "show": [
                    {
                        "cell_property_cd": "cell_property_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5f02\u57fa\u56e0",
                "term_id": "hsct_type_sub_cd_22",
                "show": [
                    {
                        "cell_property_cd": "cell_property_cd_3"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "hsct_type_sub_cd",
        "question_type": "list",
        "column_value": "",
        "title": "HSCT\u57fa\u56e0\u7c7b\u578b"
    },
    "venue_of_death_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u9662\u5185",
                "term_id": "venue_of_death_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u9662\u5916",
                "term_id": "venue_of_death_cd_2",
                "check_status": "false"
            }
        ],
        "column_key": "venue_of_death_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u6b7b\u4ea1\u573a\u6240\uff0c\u672c\u9662/\u5916\u9662"
    },
    "mutation_cd": {
        "options": [
            {
                "item_type": "checkbox",
                "zh_cn": "ASXL1",
                "term_id": "mutation_cd_2",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "ATM",
                "term_id": "mutation_cd_38",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "BCL2",
                "term_id": "mutation_cd_39",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "BCOR",
                "term_id": "mutation_cd_25",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "BIRC3",
                "term_id": "mutation_cd_40",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "BTK",
                "term_id": "mutation_cd_41",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "CBL",
                "term_id": "mutation_cd_26",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "CDKN1B",
                "term_id": "mutation_cd_42",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "CDKN2A",
                "term_id": "mutation_cd_43",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "CEBPA",
                "term_id": "mutation_cd_5",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "CREBBP",
                "term_id": "mutation_cd_45",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "CRLF2",
                "term_id": "mutation_cd_46",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "DNMT3A",
                "term_id": "mutation_cd_6",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "DNMT3B",
                "term_id": "mutation_cd_47",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "ETV6",
                "term_id": "mutation_cd_28",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "EZH2",
                "term_id": "mutation_cd_27",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "FBXW7",
                "term_id": "mutation_cd_48",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "FLT3",
                "term_id": "mutation_cd_49",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "FLT3ITD: \u9ad8\u7b49\u4f4d\u57fa\u56e0\u6bd4\u7387(>0.5)",
                "term_id": "mutation_cd_7",
                "show": [
                    {
                        "mutation_cd": "mutation_cd_49"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "FLT3ITD: \u4f4e\u7b49\u4f4d\u57fa\u56e0\u6bd4\u7387(\u22640.5)",
                "term_id": "mutation_cd_8",
                "show": [
                    {
                        "mutation_cd": "mutation_cd_49"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "FLT3ITD: \u672a\u77e5\u7b49\u4f4d\u57fa\u56e0\u6bd4\u7387",
                "term_id": "mutation_cd_9",
                "show": [
                    {
                        "mutation_cd": "mutation_cd_49"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "FLT3TKD",
                "term_id": "mutation_cd_10",
                "show": [
                    {
                        "mutation_cd": "mutation_cd_49"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "IDH1",
                "term_id": "mutation_cd_11",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "IDH2",
                "term_id": "mutation_cd_50",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "IKZF1",
                "term_id": "mutation_cd_51",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "IL7R",
                "term_id": "mutation_cd_52",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "JAK1",
                "term_id": "mutation_cd_53",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "JAK2",
                "term_id": "mutation_cd_14",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "JAK3",
                "term_id": "mutation_cd_54",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "KRAS",
                "term_id": "mutation_cd_55",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "NF1",
                "term_id": "mutation_cd_56",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "NOTCH1",
                "term_id": "mutation_cd_57",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "NPM1",
                "term_id": "mutation_cd_16",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "NRAS",
                "term_id": "mutation_cd_31",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "PLCG2",
                "term_id": "mutation_cd_58",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "RUNX1",
                "term_id": "mutation_cd_18",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "SF3B1",
                "term_id": "mutation_cd_34",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "SH2B3",
                "term_id": "mutation_cd_59",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "SRSF2",
                "term_id": "mutation_cd_19",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "TET2",
                "term_id": "mutation_cd_21",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "TP53",
                "term_id": "mutation_cd_20",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "WT1",
                "term_id": "mutation_cd_60",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "other_key": "mutation_other",
                "term_id": "mutation_cd_99",
                "zh_cn": "\u5176\u5b83",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u7ecf\u68c0\u6d4b\u672a\u53d1\u73b0\u57fa\u56e0\u7a81\u53d8",
                "term_id": "mutation_cd_23",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u8fdb\u884c\u57fa\u56e0\u68c0\u6d4b",
                "term_id": "mutation_cd_24",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u77e5",
                "term_id": "mutation_cd_00",
                "check_status": "false"
            }
        ],
        "column_key": "mutation_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u4f34\u968f\u57fa\u56e0\u7a81\u53d8"
    },
    "condition_loc_cd_8": {},
    "init_diagnosis_date": {
        "column_key": "init_diagnosis_date",
        "question_type": "date",
        "column_value": "",
        "title": "\u8be5\u75c5\u9996\u6b21\u786e\u8bca\u65e5\u671f"
    },
    "test_method_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u6d41\u5f0f\u7ec6\u80de\u672f",
                "term_id": "test_method_cd_1",
                "show": [
                    {
                        "mrd_result_cd": "mrd_result_cd_1"
                    },
                    {
                        "mrd_result_cd": "mrd_result_cd_2"
                    },
                    {
                        "mrd_result_cd": "mrd_result_cd_1"
                    },
                    {
                        "mrd_result_cd": "mrd_result_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "PCR",
                "term_id": "test_method_cd_36",
                "show": [
                    {
                        "mrd_result_cd": "mrd_result_cd_1"
                    },
                    {
                        "mrd_result_cd": "mrd_result_cd_2"
                    },
                    {
                        "mrd_result_cd": "mrd_result_cd_1"
                    },
                    {
                        "mrd_result_cd": "mrd_result_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "zh_cn": "\u5176\u5b83",
                "term_id": "test_method_cd_99",
                "item_type": "radio",
                "check_status": "false",
                "show": [
                    {
                        "mrd_result_cd": "mrd_result_cd_1"
                    },
                    {
                        "mrd_result_cd": "mrd_result_cd_2"
                    },
                    {
                        "mrd_result_cd": "mrd_result_cd_1"
                    },
                    {
                        "mrd_result_cd": "mrd_result_cd_2"
                    }
                ],
                "other_key": "test_method_cd"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u77e5",
                "term_id": "test_method_cd_00",
                "show": [
                    {
                        "mrd_result_cd": "mrd_result_cd_1"
                    },
                    {
                        "mrd_result_cd": "mrd_result_cd_2"
                    },
                    {
                        "mrd_result_cd": "mrd_result_cd_1"
                    },
                    {
                        "mrd_result_cd": "mrd_result_cd_2"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "test_method_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u7597\u6548\u8bc4\u4f30\u68c0\u6d4b\u6280\u672f"
    },
    "mh_sub_category_cd": {
        "options": [
            {
                "item_type": "checkbox",
                "zh_cn": "\u65e2\u5f80\u75be\u75c5\u53f2",
                "term_id": "mh_sub_category_cd_1",
                "show": [
                    {
                        "mh_category_cd": "mh_category_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u65e2\u5f80\u624b\u672f\u53f2",
                "term_id": "mh_sub_category_cd_2",
                "show": [
                    {
                        "mh_category_cd": "mh_category_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u65e2\u5f80\u6076\u6027\u80bf\u7624\u75c5\u53f2",
                "term_id": "mh_sub_category_cd_3",
                "show": [
                    {
                        "mh_category_cd": "mh_category_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u836f\u7269\u8fc7\u654f\u53f2",
                "term_id": "mh_sub_category_cd_4",
                "show": [
                    {
                        "mh_category_cd": "mh_category_cd_2"
                    }
                ],
                "check_status": "false"
            }
        ],
        "show": [
            {
                "mh_category_cd": "mh_category_cd_2"
            }
        ],
        "column_key": "mh_sub_category_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u65e2\u5f80\u53f2\u4e8c\u7ea7\u5206\u7c7b"
    },
    "ndrr_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u65b0\u8bca",
                "term_id": "ndrr_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u96be\u6cbb",
                "term_id": "ndrr_cd_2",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u590d\u53d1",
                "term_id": "ndrr_cd_3",
                "check_status": "false"
            }
        ],
        "column_key": "ndrr_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u672c\u9662\u521d\u6b21\u5c31\u8bca\u72b6\u6001\uff0c\u65b0\u8bca/\u590d\u53d1/\u96be\u6cbb"
    },
    "binet_stage": {},
    "pr_hsct_trial_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u662f",
                "term_id": "pr_hsct_trial_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5426",
                "term_id": "pr_hsct_trial_cd_0",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u77e5",
                "term_id": "pr_hsct_trial_cd_00",
                "check_status": "false"
            }
        ],
        "column_key": "pr_hsct_trial_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u662f\u5426\u53c2\u4e0e\u79fb\u690d\u524d\u76f8\u5173\u4e34\u5e8a\u8bd5\u9a8c"
    },
    "visit_type_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u9662\u5185\u6cbb\u7597",
                "term_id": "visit_type_cd_7",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u9662\u5916\u6cbb\u7597",
                "term_id": "visit_type_cd_8",
                "check_status": "false"
            }
        ],
        "column_key": "visit_type_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u8bbf\u89c6\u7c7b\u578b"
    },
    "cell_source_cd": {
        "options": [
            {
                "item_type": "checkbox",
                "zh_cn": "\u9aa8\u9ad3",
                "term_id": "cell_source_cd_15",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u5916\u5468\u8840",
                "term_id": "cell_source_cd_16",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u8110\u5e26\u8840",
                "term_id": "cell_source_cd_2",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "other_key": "cell_source_other",
                "term_id": "cell_source_cd_99",
                "zh_cn": "\u5176\u5b83",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u77e5",
                "term_id": "cell_source_cd_00",
                "check_status": "false"
            }
        ],
        "column_key": "cell_source_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u8f93\u6ce8\u6210\u5206"
    },
    "mrd_result_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u9634\u6027",
                "term_id": "mrd_result_cd_1",
                "show": [
                    {
                        "response_result_cd": "response_result_cd_102"
                    },
                    {
                        "response_result_cd": "response_result_cd_114"
                    },
                    {
                        "response_result_cd": "response_result_cd_109"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u9633\u6027",
                "term_id": "mrd_result_cd_2",
                "show": [
                    {
                        "response_result_cd": "response_result_cd_102"
                    },
                    {
                        "response_result_cd": "response_result_cd_114"
                    },
                    {
                        "response_result_cd": "response_result_cd_109"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u8bc4\u4f30",
                "term_id": "mrd_result_cd_00",
                "show": [
                    {
                        "response_result_cd": "response_result_cd_102"
                    },
                    {
                        "response_result_cd": "response_result_cd_114"
                    },
                    {
                        "response_result_cd": "response_result_cd_109"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "mrd_result_cd",
        "question_type": "list",
        "column_value": "",
        "title": "MRD\u8bc4\u4f30\u7ed3\u679c"
    },
    "complication_detail_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u690d\u5165\u5931\u8d25",
                "term_id": "complication_detail_cd_1",
                "show": [
                    {
                        "complication_cd": "complication_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u76ae\u80a4",
                "term_id": "complication_detail_cd_4",
                "show": [
                    {
                        "complication_cd": "complication_cd_2"
                    },
                    {
                        "complication_cd": "complication_cd_3"
                    },
                    {
                        "complication_cd": "complication_cd_4"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u514d\u75ab\u6291\u5236",
                "term_id": "complication_detail_cd_12",
                "show": [
                    {
                        "complication_cd": "complication_cd_8"
                    }
                ],
                "check_status": "false"
            },
            {
                "zh_cn": "\u5916\u5468\u8840\u7834\u788e\u7ea2\u7ec6\u80de\u6bd4\u4f8b",
                "term_id": "complication_detail_cd_14",
                "item_type": "checkbox",
                "check_status": "false",
                "show": [
                    {
                        "complication_cd": "complication_cd_9"
                    }
                ],
                "other_key": "complication_detail_other"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5355\u7eaf\u6301\u7eed\u6027\u8840\u5c0f\u677f\u51cf\u5c11\u75c7",
                "term_id": "complication_detail_cd_2",
                "show": [
                    {
                        "complication_cd": "complication_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6d88\u5316\u9053",
                "term_id": "complication_detail_cd_5",
                "show": [
                    {
                        "complication_cd": "complication_cd_2"
                    },
                    {
                        "complication_cd": "complication_cd_3"
                    },
                    {
                        "complication_cd": "complication_cd_4"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "EB\u75c5\u6bd2\u611f\u67d3",
                "term_id": "complication_detail_cd_13",
                "show": [
                    {
                        "complication_cd": "complication_cd_8"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5355\u7eaf\u7ea2\u7ec6\u80de\u51cf\u5c11",
                "term_id": "complication_detail_cd_3",
                "show": [
                    {
                        "complication_cd": "complication_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u809d",
                "term_id": "complication_detail_cd_6",
                "show": [
                    {
                        "complication_cd": "complication_cd_2"
                    },
                    {
                        "complication_cd": "complication_cd_3"
                    },
                    {
                        "complication_cd": "complication_cd_4"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u8840\u4fbf",
                "term_id": "complication_detail_cd_7",
                "show": [
                    {
                        "complication_cd": "complication_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u80ba",
                "term_id": "complication_detail_cd_8",
                "show": [
                    {
                        "complication_cd": "complication_cd_3"
                    },
                    {
                        "complication_cd": "complication_cd_4"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u795e\u7ecf",
                "term_id": "complication_detail_cd_9",
                "show": [
                    {
                        "complication_cd": "complication_cd_3"
                    },
                    {
                        "complication_cd": "complication_cd_4"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u773c",
                "term_id": "complication_detail_cd_10",
                "show": [
                    {
                        "complication_cd": "complication_cd_3"
                    },
                    {
                        "complication_cd": "complication_cd_4"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u53e3",
                "term_id": "complication_detail_cd_11",
                "show": [
                    {
                        "complication_cd": "complication_cd_3"
                    },
                    {
                        "complication_cd": "complication_cd_4"
                    }
                ],
                "check_status": "false"
            },
            {
                "zh_cn": "\u5176\u5b83",
                "term_id": "complication_detail_cd_99",
                "item_type": "checkbox",
                "check_status": "false",
                "show": [
                    {
                        "complication_cd": "complication_cd_8"
                    },
                    {
                        "complication_cd": "complication_cd_3"
                    },
                    {
                        "complication_cd": "complication_cd_4"
                    }
                ],
                "other_key": "complication_detail_other"
            }
        ],
        "column_key": "complication_detail_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u5e76\u53d1\u75c7\u5177\u4f53\u60c5\u51b5/\u53d7\u7d2f\u90e8\u4f4d"
    },
    "hsct_plasma_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u662f",
                "term_id": "hsct_plasma_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5426",
                "term_id": "hsct_plasma_cd_0",
                "check_status": "false"
            }
        ],
        "column_key": "hsct_plasma_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u8840\u6d46\u7f6e\u6362"
    },
    "cell_property_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u5f02\u4f53",
                "term_id": "cell_property_cd_21",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u6709\u8840\u7f18\u5173\u7cfb",
                "term_id": "cell_property_cd_22",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5f02\u4f53",
                "term_id": "cell_property_cd_23",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u65e0\u8840\u7f18\u5173\u7cfb",
                "term_id": "cell_property_cd_2",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5f02\u4f53",
                "term_id": "cell_property_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u660e\u786e\u8840\u7f18\u5173\u7cfb",
                "term_id": "cell_property_cd_3",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5f02\u4f53",
                "term_id": "cell_property_cd_4",
                "check_status": "false"
            }
        ],
        "column_key": "cell_property_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u6210\u5206\u5c5e\u6027\uff0c\u81ea\u4f53/\u5f02\u4f53"
    },
    "mh_category_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u6cbb\u7597\u53f2",
                "term_id": "mh_category_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u65e2\u5f80\u53f2",
                "term_id": "mh_category_cd_2",
                "check_status": "false"
            }
        ],
        "column_key": "mh_category_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u65e2\u5f80\u53f2\u4e00\u7ea7\u5206\u7c7b"
    },
    "complication_cd": {
        "options": [
            {
                "item_type": "checkbox",
                "zh_cn": "\u9020\u8840\u91cd\u5efa\u4e0d\u826f",
                "term_id": "complication_cd_1",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6025\u6027\u79fb\u690d\u7269\u6297\u5bbf\u4e3b\u75c5",
                "term_id": "complication_cd_2",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6162\u6027\u79fb\u690d\u7269\u6297\u5bbf\u4e3b\u75c5",
                "term_id": "complication_cd_3",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u611f\u67d3\u6027\u75be\u75c5",
                "term_id": "complication_cd_4",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u690d\u5165\u7efc\u5408\u5f81",
                "term_id": "complication_cd_5",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u690d\u5165\u4e0d\u826f",
                "term_id": "complication_cd_6",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u8840\u5c0f\u677f\u5ef6\u8fdf\u690d\u5165",
                "term_id": "complication_cd_7",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u79fb\u690d\u540e\u6dcb\u5df4\u589e\u6b96\u6027\u75be\u75c5\uff08PTLD\uff09",
                "term_id": "complication_cd_8",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u8840\u6813\u6027\u5fae\u8840\u7ba1\u75c5\uff08TMA\uff09",
                "term_id": "complication_cd_9",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6bdb\u7ec6\u8840\u7ba1\u6e17\u6f0f\u7efc\u5408\u5f81",
                "term_id": "complication_cd_10",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u5f25\u6f2b\u6027\u80ba\u6ce1\u51fa\u8840",
                "term_id": "complication_cd_11",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u95f4\u8d28\u6027\u80ba\u708e",
                "term_id": "complication_cd_12",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u836f\u7269\u6027\u809d\u635f\u4f24",
                "term_id": "complication_cd_13",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u809d\u9759\u8109\u963b\u585e\u6027\u75be\u75c5\uff08VOD\uff09",
                "term_id": "complication_cd_14",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u809d\u7aa6\u963b\u585e\u7efc\u5408\u5f81",
                "term_id": "complication_cd_15",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u75c5\u6bd2\u6027\u809d\u708e",
                "term_id": "complication_cd_16",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u8131\u9ad3\u9798\u75c5\u53d8",
                "term_id": "complication_cd_17",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u540e\u90e8\u8111\u7efc\u5408\u5f81",
                "term_id": "complication_cd_18",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u79fb\u690d\u540e\u8111\u767d\u8d28\u75c5",
                "term_id": "complication_cd_19",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u7cbe\u795e\u5f02\u5e38",
                "term_id": "complication_cd_20",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u51fa\u8840\u6027\u8180\u80f1\u708e",
                "term_id": "complication_cd_21",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6ccc\u5c3f\u7cfb\u7edf\u611f\u67d3",
                "term_id": "complication_cd_22",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u4e0d\u5b55\u75c7",
                "term_id": "complication_cd_23",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "zh_cn": "\u5176\u4ed6\u51fa\u8840\u6027\u75be\u75c5",
                "term_id": "complication_cd_24",
                "item_type": "checkbox",
                "check_status": "false",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "other_key": "bleed_disorders_other"
            },
            {
                "zh_cn": "\u5176\u5b83",
                "term_id": "complication_cd_99",
                "item_type": "checkbox",
                "check_status": "false",
                "show": [
                    {
                        "complication_yn_cd": "complication_yn_cd_1"
                    }
                ],
                "other_key": "complication_other"
            }
        ],
        "column_key": "complication_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u5e76\u53d1\u75c7"
    },
    "pretreat_type_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u4ee5\u5316\u7597\u4e3a\u4e3b",
                "term_id": "pretreat_type_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u4ee5\u653e\u7597\u4e3a\u4e3b",
                "term_id": "pretreat_type_cd_2",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "other_key": "pretreat_type_other",
                "term_id": "pretreat_type_cd_99",
                "zh_cn": "\u5176\u5b83",
                "check_status": "false"
            }
        ],
        "column_key": "pretreat_type_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u9884\u5904\u7406\u65b9\u6848\u7c7b\u578b"
    },
    "ae_severity_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "1",
                "term_id": "ae_severity_cd_1",
                "show": [
                    {
                        "ae_yn_cd": "ae_yn_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "2",
                "term_id": "ae_severity_cd_2",
                "show": [
                    {
                        "ae_yn_cd": "ae_yn_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "3",
                "term_id": "ae_severity_cd_3",
                "show": [
                    {
                        "ae_yn_cd": "ae_yn_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "4",
                "term_id": "ae_severity_cd_4",
                "show": [
                    {
                        "ae_yn_cd": "ae_yn_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "5",
                "term_id": "ae_severity_cd_5",
                "show": [
                    {
                        "ae_yn_cd": "ae_yn_cd_2"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "ae_severity_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u4e0d\u826f\u4e8b\u4ef6\u4e25\u91cd\u7b49\u7ea7"
    },
    "who_cd_9": {},
    "ae_trae_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u6cbb\u7597\u76f8\u5173",
                "term_id": "ae_trae_cd_1",
                "show": [
                    {
                        "ae_yn_cd": "ae_yn_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u975e\u6cbb\u7597\u76f8\u5173",
                "term_id": "ae_trae_cd_0",
                "show": [
                    {
                        "ae_yn_cd": "ae_yn_cd_2"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "ae_trae_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u4e0d\u826f\u4e8b\u4ef6\u662f\u5426\u4e0e\u6cbb\u7597\u76f8\u5173"
    },
    "condition_term_cd": {
        "options": [
            {
                "item_type": "checkbox",
                "zh_cn": "\u5fc3\u808c\u6897\u6b7b",
                "term_id": "condition_term_cd_21",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u5145\u8840\u6027\u5fc3\u529b\u8870\u7aed",
                "term_id": "condition_term_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u5468\u56f4\u8840\u7ba1\u75be\u75c5",
                "term_id": "condition_term_cd_39",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u8111\u8840\u7ba1\u75be\u75c5",
                "term_id": "condition_term_cd_24",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u75f4\u5446\u75c7",
                "term_id": "condition_term_cd_40",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6162\u6027\u80ba\u90e8\u75be\u75c5",
                "term_id": "condition_term_cd_41",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u7ed3\u7f14\u7ec4\u7ec7\u75be\u75c5",
                "term_id": "condition_term_cd_42",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6e83\u75a1\u75c5",
                "term_id": "condition_term_cd_43",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u809d\u810f\u75be\u75c5",
                "term_id": "condition_term_cd_44",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u7cd6\u5c3f\u75c5",
                "term_id": "condition_term_cd_17",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u504f\u762b",
                "term_id": "condition_term_cd_45",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u4e2d/\u91cd\u5ea6\u80be\u810f\u75be\u75c5",
                "term_id": "condition_term_cd_46",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u80bf\u7624",
                "term_id": "condition_term_cd_47",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6dcb\u5df4\u7624",
                "term_id": "condition_term_cd_48",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u8f6c\u79fb\u6027\u80bf\u7624",
                "term_id": "condition_term_cd_49",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u83b7\u5f97\u6027\u514d\u75ab\u7f3a\u9677\u7efc\u5408\u5f81",
                "term_id": "condition_term_cd_50",
                "check_status": "false"
            },
            {
                "zh_cn": "\u5176\u5b83",
                "term_id": "condition_term_cd_99",
                "item_type": "radio",
                "check_status": "false",
                "show": [
                    {
                        "condition_loc_cd": "condition_loc_cd_8"
                    }
                ],
                "other_key": "condition_term_other"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u65e0",
                "term_id": "condition_term_cd_38",
                "show": [
                    {
                        "condition_loc_cd": "condition_loc_cd_8"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "condition_term_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u533b\u5b66\u72b6\u6001\u672f\u8bed"
    },
    "chab_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u6b63\u5e38\u6838\u578b",
                "term_id": "chab_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5f02\u5e38\u6838\u578b",
                "term_id": "chab_cd_2",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u590d\u6742\u6838\u578b",
                "term_id": "chab_cd_21",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5355\u4f53\u6838\u578b",
                "term_id": "chab_cd_22",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u8bc4\u4f30",
                "term_id": "chab_cd_00",
                "check_status": "false"
            }
        ],
        "column_key": "chab_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u67d3\u8272\u4f53\u6838\u578b"
    },
    "who_sub_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "B\u6dcb\u5df4\u6bcd\u7ec6\u80de\u767d\u8840\u75c5/\u6dcb\u5df4\u7624\uff0c\u975e\u7279\u6307\u578b\uff08NOS\uff09",
                "term_id": "who_sub_cd_1201",
                "show": [
                    {
                        "who_cd": "who_cd_12"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "B\u6dcb\u5df4\u6bcd\u7ec6\u80de\u767d\u8840\u75c5/\u6dcb\u5df4\u7624\u4f34\u9ad8\u5ea6\u8d85\u4e8c\u500d\u4f53",
                "term_id": "who_sub_cd_1202",
                "show": [
                    {
                        "who_cd": "who_cd_12"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "B\u6dcb\u5df4\u6bcd\u7ec6\u80de\u767d\u8840\u75c5/\u6dcb\u5df4\u7624\u4f34\u4e9a\u4e8c\u500d\u4f53",
                "term_id": "who_sub_cd_1203",
                "show": [
                    {
                        "who_cd": "who_cd_12"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "B\u6dcb\u5df4\u6bcd\u7ec6\u80de\u767d\u8840\u75c5/\u6dcb\u5df4\u7624\u4f34iAMP21",
                "term_id": "who_sub_cd_1204",
                "show": [
                    {
                        "who_cd": "who_cd_12"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "B\u6dcb\u5df4\u6bcd\u7ec6\u80de\u767d\u8840\u75c5/\u6dcb\u5df4\u7624\u4f34BCR::ABL1\u878d\u5408",
                "term_id": "who_sub_cd_1205",
                "show": [
                    {
                        "who_cd": "who_cd_12"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "B\u6dcb\u5df4\u6bcd\u7ec6\u80de\u767d\u8840\u75c5/\u6dcb\u5df4\u7624\u4f34BCR::ABL1\u6837\u7279\u5f81",
                "term_id": "who_sub_cd_1206",
                "show": [
                    {
                        "who_cd": "who_cd_12"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "B\u6dcb\u5df4\u6bcd\u7ec6\u80de\u767d\u8840\u75c5/\u6dcb\u5df4\u7624\u4f34KMT2A\u91cd\u6392",
                "term_id": "who_sub_cd_1207",
                "show": [
                    {
                        "who_cd": "who_cd_12"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "B\u6dcb\u5df4\u6bcd\u7ec6\u80de\u767d\u8840\u75c5/\u6dcb\u5df4\u7624\u4f34ETV6::RUNX1\u878d\u5408",
                "term_id": "who_sub_cd_1208",
                "show": [
                    {
                        "who_cd": "who_cd_12"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "B\u6dcb\u5df4\u6bcd\u7ec6\u80de\u767d\u8840\u75c5/\u6dcb\u5df4\u7624\u4f34ETV6::RUNX1\u6837\u7279\u5f81",
                "term_id": "who_sub_cd_1209",
                "show": [
                    {
                        "who_cd": "who_cd_12"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "B\u6dcb\u5df4\u6bcd\u7ec6\u80de\u767d\u8840\u75c5/\u6dcb\u5df4\u7624\u4f34TCF3::PBX1\u878d\u5408",
                "term_id": "who_sub_cd_1210",
                "show": [
                    {
                        "who_cd": "who_cd_12"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "B\u6dcb\u5df4\u6bcd\u7ec6\u80de\u767d\u8840\u75c5/\u6dcb\u5df4\u7624\u4f34IGH::IL3\u878d\u5408",
                "term_id": "who_sub_cd_1211",
                "show": [
                    {
                        "who_cd": "who_cd_12"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "B\u6dcb\u5df4\u6bcd\u7ec6\u80de\u767d\u8840\u75c5/\u6dcb\u5df4\u7624\u4f34TCF3::HLF\u878d\u5408",
                "term_id": "who_sub_cd_1212",
                "show": [
                    {
                        "who_cd": "who_cd_12"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "B\u6dcb\u5df4\u6bcd\u7ec6\u80de\u767d\u8840\u75c5/\u6dcb\u5df4\u7624\u4f34\u5176\u4ed6\u660e\u786e\u7684\u9057\u4f20\u5f02\u5e38",
                "term_id": "who_sub_cd_1213",
                "show": [
                    {
                        "who_cd": "who_cd_12"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "T\u6dcb\u5df4\u6bcd\u7ec6\u80de\u767d\u8840\u75c5/\u6dcb\u5df4\u7624\uff0c\u975e\u7279\u6307\u578b\uff08NOS\uff09",
                "term_id": "who_sub_cd_1301",
                "show": [
                    {
                        "who_cd": "who_cd_13"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u65e9\u671fT\u524d\u4f53\u6dcb\u5df4\u6bcd\u7ec6\u80de\u767d\u8840\u75c5/\u6dcb\u5df4\u7624",
                "term_id": "who_sub_cd_1302",
                "show": [
                    {
                        "who_cd": "who_cd_13"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "who_sub_cd",
        "question_type": "list",
        "column_value": "",
        "title": "WHO\u5206\u7c7b\u4e9a\u578b"
    },
    "prior_trial_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u5426",
                "term_id": "prior_trial_cd_0",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u662f",
                "term_id": "prior_trial_cd_1",
                "check_status": "false"
            }
        ],
        "column_key": "prior_trial_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u662f\u5426\u53c2\u52a0\u8fc7\u76f8\u5173\u4e34\u5e8a\u8bd5\u9a8c"
    },
    "donor_type_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u7236\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_1",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u6bcd\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_2",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5b50\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_3",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5973\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_4",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5144\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_5",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5f1f\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_6",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u59d0\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_7",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u59b9\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_8",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u8868\u54e5\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_9",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u8868\u59d0\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_10",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u8868\u5f1f\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_11",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u8868\u59b9\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_12",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u59d1\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_13",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u53d4\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_14",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u59e8\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_15",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u8205\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_16",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u4f84\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_17",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u4f84\u5973\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_18",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5916\u7525\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_19",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5916\u7525\u5973\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_20",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u7537\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_21",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    },
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5973\uff08\u4f9b\uff09",
                "term_id": "donor_type_cd_22",
                "show": [
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_1"
                    },
                    {
                        "donor_rcp_type_cd": "donor_rcp_type_cd_2"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "donor_type_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u4f9b\u53d7\u8005\u5173\u7cfb\uff08\u4f9b\uff09"
    },
    "chab_cd_2": {},
    "death_flag_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u751f\u5b58",
                "term_id": "death_flag_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u6b7b\u4ea1",
                "term_id": "death_flag_cd_2",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u77e5",
                "term_id": "death_flag_cd_00",
                "check_status": "false"
            }
        ],
        "column_key": "death_flag_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u60a3\u8005\u751f\u5b58\u72b6\u6001"
    },
    "progress_yn_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u662f",
                "term_id": "progress_yn_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5426",
                "term_id": "progress_yn_cd_0",
                "check_status": "false"
            }
        ],
        "column_key": "progress_yn_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u6709\u65e0\u590d\u53d1/\u8fdb\u5c55\u4e34\u5e8a\u4e8b\u4ef6"
    },
    "fungal_inft_site_cd": {
        "options": [
            {
                "item_type": "checkbox",
                "zh_cn": "\u53e3\u8154",
                "term_id": "fungal_inft_site_cd_1",
                "show": [
                    {
                        "fungal_inft_cd": "fungal_inft_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u76ae\u80a4",
                "term_id": "fungal_inft_site_cd_2",
                "show": [
                    {
                        "fungal_inft_cd": "fungal_inft_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6d88\u5316\u9053",
                "term_id": "fungal_inft_site_cd_3",
                "show": [
                    {
                        "fungal_inft_cd": "fungal_inft_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u80ba",
                "term_id": "fungal_inft_site_cd_4",
                "show": [
                    {
                        "fungal_inft_cd": "fungal_inft_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u4e2d\u67a2\u795e\u7ecf\u7cfb\u7edf",
                "term_id": "fungal_inft_site_cd_5",
                "show": [
                    {
                        "fungal_inft_cd": "fungal_inft_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "zh_cn": "\u5176\u5b83",
                "term_id": "fungal_inft_site_cd_99",
                "item_type": "checkbox",
                "check_status": "false",
                "show": [
                    {
                        "fungal_inft_cd": "fungal_inft_cd_1"
                    }
                ],
                "other_key": "fungal_inft_site_other"
            }
        ],
        "column_key": "fungal_inft_site_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u79fb\u690d\u524d\u771f\u83cc\u611f\u67d3\u90e8\u4f4d"
    },
    "extnd_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u6709",
                "term_id": "extnd_cd_2",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u65e0",
                "term_id": "extnd_cd_3",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u8bc4\u4f30",
                "term_id": "extnd_cd_00",
                "check_status": "false"
            }
        ],
        "column_key": "extnd_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u6709\u65e0\u9ad3\u5916\u6d78\u6da6"
    },
    "interv_op_yn": {
        "options": [
            {
                "zh_cn": "\u6709",
                "term_id": "interv_op_yn_1",
                "item_type": "radio",
                "check_status": "false",
                "show": [
                    {
                        "ae_yn_cd": "ae_yn_cd_2"
                    }
                ],
                "other_key": "interv_op"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u65e0",
                "term_id": "interv_op_yn_0",
                "show": [
                    {
                        "ae_yn_cd": "ae_yn_cd_2"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "interv_op_yn",
        "question_type": "list",
        "column_value": "",
        "title": "\u6709\u65e0\u95e8\u8bca\u4ecb\u5165\u63aa\u65bd"
    },
    "progress_event_cd": {
        "options": [
            {
                "item_type": "checkbox",
                "zh_cn": "\u590d\u53d1",
                "term_id": "progress_event_cd_1",
                "show": [
                    {
                        "progress_event_cd": "progress_event_cd_1",
                        "progress_yn_cd": "progress_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u96be\u6cbb",
                "term_id": "progress_event_cd_3",
                "show": [
                    {
                        "progress_event_cd": "progress_event_cd_3",
                        "progress_yn_cd": "progress_yn_cd_1"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "progress_event_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u75c5\u60c5\u53d8\u5316\u4e8b\u4ef6"
    },
    "mesenchymal_sc_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u662f",
                "term_id": "mesenchymal_sc_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5426",
                "term_id": "mesenchymal_sc_cd_0",
                "check_status": "false"
            }
        ],
        "column_key": "mesenchymal_sc_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u95f4\u5145\u8d28\u5e72\u7ec6\u80de\u56de\u8f93"
    },
    "interv_em_yn": {
        "options": [
            {
                "zh_cn": "\u6709",
                "term_id": "interv_em_yn_1",
                "item_type": "radio",
                "check_status": "false",
                "show": [
                    {
                        "ae_yn_cd": "ae_yn_cd_2"
                    }
                ],
                "other_key": "interv_em"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u65e0",
                "term_id": "interv_em_yn_0",
                "show": [
                    {
                        "ae_yn_cd": "ae_yn_cd_2"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "interv_em_yn",
        "question_type": "list",
        "column_value": "",
        "title": "\u6709\u65e0\u6025\u8bca\u4ecb\u5165\u63aa\u65bd"
    },
    "visit_stage_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u521d\u6b21\u5c31\u8bca",
                "term_id": "visit_stage_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5b9a\u671f\u590d\u67e5",
                "term_id": "visit_stage_cd_2",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u975e\u5b9a\u671f\u5c31\u8bca",
                "term_id": "visit_stage_cd_3",
                "check_status": "false"
            }
        ],
        "column_key": "visit_stage_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u5c31\u8bca\u9636\u6bb5\uff0c\u5982\u521d\u6b21\u5c31\u8bca/\u5b9a\u671f\u590d\u67e5\u7b49"
    },
    "visit_reason_cd": {
        "options": [
            {
                "item_type": "checkbox",
                "zh_cn": "\u63a5\u53d7\u4e3b\u8bca\u65ad\u76f8\u5173\u6cbb\u7597",
                "term_id": "visit_reason_cd_1",
                "show": [
                    {
                        "visit_stage_cd": "visit_stage_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u53d1\u751f\u4e0d\u826f\u53cd\u5e94",
                "term_id": "visit_reason_cd_2",
                "show": [
                    {
                        "visit_stage_cd": "visit_stage_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u75c7\u72b6\u52a0\u5267",
                "term_id": "visit_reason_cd_3",
                "show": [
                    {
                        "visit_stage_cd": "visit_stage_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "zh_cn": "\u5176\u5b83",
                "term_id": "visit_reason_cd_99",
                "item_type": "checkbox",
                "check_status": "false",
                "show": [
                    {
                        "visit_stage_cd": "visit_stage_cd_3"
                    }
                ],
                "other_key": "visit_reason_other"
            }
        ],
        "column_key": "visit_reason_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u975e\u5b9a\u671f\u5c31\u8bca\u7684\u539f\u56e0\u5217\u8868"
    },
    "complication_trt_cd": {
        "options": [
            {
                "item_type": "checkbox",
                "zh_cn": "\u95f4\u5145\u8d28\u5e72\u7ec6\u80de\u56de\u8f93",
                "term_id": "complication_trt_cd_1",
                "show": [
                    {
                        "complication_cd": "complication_cd_6"
                    },
                    {
                        "complication_cd": "complication_cd_7"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u7ec6\u80de\u6cbb\u7597",
                "term_id": "complication_trt_cd_4",
                "show": [
                    {
                        "complication_cd": "complication_cd_8"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u4f7f\u7528\u547c\u5438\u673a",
                "term_id": "complication_trt_cd_5",
                "show": [
                    {
                        "complication_cd": "complication_cd_11"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u547c\u5438\u673a",
                "term_id": "complication_trt_cd_51",
                "show": [
                    {
                        "complication_trt_cd": "complication_trt_cd_5"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u624b\u672f",
                "term_id": "complication_trt_cd_6",
                "show": [
                    {
                        "complication_cd": "complication_cd_21"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "CD34+\u56de\u8f93",
                "term_id": "complication_trt_cd_2",
                "show": [
                    {
                        "complication_cd": "complication_cd_6"
                    },
                    {
                        "complication_cd": "complication_cd_7"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "BIPAP\u547c\u5438\u673a",
                "term_id": "complication_trt_cd_52",
                "show": [
                    {
                        "complication_trt_cd": "complication_trt_cd_5"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u4e8c\u6b21\u79fb\u690d",
                "term_id": "complication_trt_cd_3",
                "show": [
                    {
                        "complication_cd": "complication_cd_6"
                    }
                ],
                "check_status": "false"
            },
            {
                "zh_cn": "\u5176\u5b83",
                "term_id": "complication_trt_cd_99",
                "item_type": "checkbox",
                "check_status": "false",
                "show": [
                    {
                        "complication_cd": "complication_cd_6"
                    },
                    {
                        "complication_cd": "complication_cd_7"
                    },
                    {
                        "complication_cd": "complication_cd_8"
                    },
                    {
                        "complication_cd": "complication_cd_11"
                    },
                    {
                        "complication_cd": "complication_cd_21"
                    }
                ],
                "other_key": "complication_trt_other"
            }
        ],
        "column_key": "complication_trt_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u5e76\u53d1\u75c7\u53d1\u751f\u540e\u5904\u7406\u65b9\u6cd5"
    },
    "ecog_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "0\u7ea7-\u6d3b\u52a8\u80fd\u529b\u5b8c\u5168\u6b63\u5e38",
                "term_id": "ecog_cd_0",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u4e0e\u8d77\u75c5\u524d\u6d3b\u52a8\u80fd\u529b\u65e0\u4efb\u4f55\u5dee\u5f02",
                "term_id": "ecog_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "1\u7ea7-\u80fd\u81ea\u7531\u8d70\u52a8\u53ca\u4ece\u4e8b\u8f7b\u4f53\u529b\u6d3b\u52a8",
                "term_id": "ecog_cd_2",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5305\u62ec\u4e00\u822c\u5bb6\u52a1\u6216\u529e\u516c\u5ba4\u5de5\u4f5c",
                "term_id": "ecog_cd_3",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u4f46\u4e0d\u80fd\u4ece\u4e8b\u8f83\u91cd\u7684\u4f53\u529b\u6d3b\u52a8",
                "term_id": "ecog_cd_4",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "2\u7ea7 -\u80fd\u81ea\u7531\u8d70\u52a8\u53ca\u751f\u6d3b\u81ea\u7406",
                "term_id": "ecog_cd_00",
                "check_status": "false"
            }
        ],
        "column_key": "ecog_cd",
        "question_type": "list",
        "column_value": "",
        "title": "ECOG\u8bc4\u5206"
    },
    "plant_act_dna_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u5b8c\u5168\u4f9b\u8005\u7ec6\u80de\u5d4c\u5408\u72b6\u6001",
                "term_id": "plant_act_dna_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5b8c\u5168\u53d7\u8005\u7ec6\u80de\u5d4c\u5408\u72b6\u6001",
                "term_id": "plant_act_dna_cd_2",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u4f9b\u8005\u53d7\u8005\u6df7\u5408\u5d4c\u5408\u72b6\u6001",
                "term_id": "plant_act_dna_cd_3",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u77e5",
                "term_id": "plant_act_dna_cd_00",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u8bc4\u4f30",
                "term_id": "plant_act_dna_cd_4",
                "check_status": "false"
            }
        ],
        "column_key": "plant_act_dna_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u690d\u6d3b\u8bc1\u636e - DNA\u6307\u7eb9\u56fe\u68c0\u6d4b\u7ed3\u679c"
    },
    "complication_grade_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "1\u5ea6",
                "term_id": "complication_grade_cd_1",
                "show": [
                    {
                        "complication_cd": "complication_cd_21"
                    },
                    {
                        "complication_cd": "complication_cd_2",
                        "complication_detail_cd": "complication_detail_cd_4"
                    },
                    {
                        "complication_cd": "complication_cd_2",
                        "complication_detail_cd": "complication_detail_cd_5"
                    },
                    {
                        "complication_cd": "complication_cd_2",
                        "complication_detail_cd": "complication_detail_cd_6"
                    },
                    {
                        "complication_cd": "complication_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "2\u7ea7-\u8840\u80c6\u7ea2\u7d202\uff5e5mg/dl\uff1b\u9700\u8981\u8f7b\n\u5fae\u5e72\u9884\uff08\u5982\u8840\u6db2\u5236\u54c1\uff0c\u5229\u5c3f\u5242\uff0c\u6c27\u6c14",
                "term_id": "complication_grade_cd_15",
                "show": [
                    {
                        "complication_cd": "complication_cd_15"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "1\u7ea7-\u65e0\u75c7\u72b6",
                "term_id": "complication_grade_cd_5",
                "show": [
                    {
                        "complication_cd": "complication_cd_16"
                    },
                    {
                        "complication_cd": "complication_cd_10"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "2\u5ea6",
                "term_id": "complication_grade_cd_2",
                "show": [
                    {
                        "complication_cd": "complication_cd_21"
                    },
                    {
                        "complication_cd": "complication_cd_2",
                        "complication_detail_cd": "complication_detail_cd_4"
                    },
                    {
                        "complication_cd": "complication_cd_2",
                        "complication_detail_cd": "complication_detail_cd_5"
                    },
                    {
                        "complication_cd": "complication_cd_2",
                        "complication_detail_cd": "complication_detail_cd_6"
                    },
                    {
                        "complication_cd": "complication_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "3\u7ea7-\u8840\u80c6\u7ea2\u7d20\uff1e5 mg/dL\uff1b\u9700\u8981\u4f7f\u7528\u51dd\u8840\u8c03\u8282\u5242\uff08\u5982\u53bb\u7ea4\u82f7\uff09\uff1b\u8d85\u58f0\u663e\u793a\u8840\u6d41\u9006\u8f6c",
                "term_id": "complication_grade_cd_16",
                "show": [
                    {
                        "complication_cd": "complication_cd_15"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "2\u7ea7-\u4e2d\u5ea6\u75c7\u72b6\uff0c\u9700\u8981\u5185\u79d1\u6cbb\u7597",
                "term_id": "complication_grade_cd_12",
                "show": [
                    {
                        "complication_cd": "complication_cd_16"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "2\u7ea7-\u6709\u75c7\u72b6\uff0c\u9700\u8981\u6cbb\u7597",
                "term_id": "complication_grade_cd_6",
                "show": [
                    {
                        "complication_cd": "complication_cd_10"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "3\u7ea7-\u4e25\u91cd\u75c7\u72b6\uff0c\u9700\u8981\u6cbb\u7597",
                "term_id": "complication_grade_cd_7",
                "show": [
                    {
                        "complication_cd": "complication_cd_10"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "3\u5ea6",
                "term_id": "complication_grade_cd_3",
                "show": [
                    {
                        "complication_cd": "complication_cd_21"
                    },
                    {
                        "complication_cd": "complication_cd_2",
                        "complication_detail_cd": "complication_detail_cd_4"
                    },
                    {
                        "complication_cd": "complication_cd_2",
                        "complication_detail_cd": "complication_detail_cd_5"
                    },
                    {
                        "complication_cd": "complication_cd_2",
                        "complication_detail_cd": "complication_detail_cd_6"
                    },
                    {
                        "complication_cd": "complication_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "4\u7ea7-\u5371\u53ca\u751f\u547d\uff08\u5982\u547c\u5438\u673a\u652f\u6301\u3001\u900f\u6790\u3001\u8840\u6d46\u7f6e\u6362\u3001\u8179\u8154\u5f15\u6d41\uff09",
                "term_id": "complication_grade_cd_17",
                "show": [
                    {
                        "complication_cd": "complication_cd_15"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "3\u7ea7-\u6709\u75c7\u72b6\u7684\u809d\u529f\u80fd\u969c\u788d\uff1b\u7ec4\u7ec7\u6d3b\u68c0\u6cd5\u53d1\u73b0\u51fa\u73b0\u809d\u7ea4\u7ef4\u5316\uff1b\u4ee3\u507f\u671f\u809d\u786c\u5316\uff1b\u9700\u8981\u4f4f\u9662\u6216\u5ef6\u957f\u4f4f\u9662\u65f6\u95f4",
                "term_id": "complication_grade_cd_18",
                "show": [
                    {
                        "complication_cd": "complication_cd_16"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "4\u7ea7-\u5371\u53ca\u751f\u547d\uff0c\u9700\u8981\u7d27\u6025\u6cbb\u7597",
                "term_id": "complication_grade_cd_8",
                "show": [
                    {
                        "complication_cd": "complication_cd_10"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "4\u5ea6",
                "term_id": "complication_grade_cd_4",
                "show": [
                    {
                        "complication_cd": "complication_cd_21"
                    },
                    {
                        "complication_cd": "complication_cd_2",
                        "complication_detail_cd": "complication_detail_cd_4"
                    },
                    {
                        "complication_cd": "complication_cd_2",
                        "complication_detail_cd": "complication_detail_cd_5"
                    },
                    {
                        "complication_cd": "complication_cd_2",
                        "complication_detail_cd": "complication_detail_cd_6"
                    },
                    {
                        "complication_cd": "complication_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "4\u7ea7-\u5371\u53ca\u751f\u547d\uff1b\u91cd\u5ea6\u809d\u529f\u80fd\u5931\u4ee3\u507f\uff08\u5982\u51dd\u8840\u529f\u80fd\u969c\u788d\u3001\u8111\u75c5\u3001\u660f\u8ff7\uff09",
                "term_id": "complication_grade_cd_19",
                "show": [
                    {
                        "complication_cd": "complication_cd_16"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "5\u7ea7-\u6b7b\u4ea1",
                "term_id": "complication_grade_cd_14",
                "show": [
                    {
                        "complication_cd": "complication_cd_16"
                    },
                    {
                        "complication_cd": "complication_cd_10"
                    },
                    {
                        "complication_cd": "complication_cd_15"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "complication_grade_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u5e76\u53d1\u75c7\u4e25\u91cd\u7a0b\u5ea6"
    },
    "mh_term_cd": {
        "options": [
            {
                "item_type": "checkbox",
                "zh_cn": "\u8d2b\u8840",
                "term_id": "mh_term_cd_53",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u51fa\u8840\u503e\u5411",
                "term_id": "mh_term_cd_54",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u539f\u56e0\u4e0d\u660e\u7684\u53d1\u70ed",
                "term_id": "mh_term_cd_55",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u9ec4\u75b8",
                "term_id": "mh_term_cd_56",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6dcb\u5df4\u7ed3\u80bf\u5927",
                "term_id": "mh_term_cd_57",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u809d/\u813e\u80bf\u5927",
                "term_id": "mh_term_cd_58",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u53e3\u8154\u611f\u67d3",
                "term_id": "mh_term_cd_9",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u76ae\u80a4\u75c5",
                "term_id": "mh_term_cd_13",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u809d\u708e",
                "term_id": "mh_term_cd_4",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u7ed3\u6838\u75c5",
                "term_id": "mh_term_cd_5",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6e83\u75a1\u6027\u7ed3\u80a0\u708e",
                "term_id": "mh_term_cd_6",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u514b\u7f57\u6069\u75c5",
                "term_id": "mh_term_cd_7",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u7cbe\u795e\u75c5",
                "term_id": "mh_term_cd_8",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u809b\u5468\u75be\u75c5",
                "term_id": "mh_term_cd_10",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u8033\u9f3b\u5589\u75be\u75c5",
                "term_id": "mh_term_cd_11",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u773c\u90e8\u75be\u75c5",
                "term_id": "mh_term_cd_12",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u9ad8\u8840\u538b",
                "term_id": "mh_term_cd_1",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u7cd6\u5c3f\u75c5",
                "term_id": "mh_term_cd_2",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u51a0\u5fc3\u75c5",
                "term_id": "mh_term_cd_3",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "zh_cn": "\u5176\u4ed6\u65e2\u5f80\u75be\u75c5",
                "term_id": "mh_term_cd_991",
                "item_type": "checkbox",
                "check_status": "false",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "other_key": "mh_term_other"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u65e0\u65e2\u5f80\u75c5\u53f2",
                "term_id": "mh_term_cd_14",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u77e5",
                "term_id": "mh_term_cd_002",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u809d\u810f\u624b\u672f",
                "term_id": "mh_term_cd_59",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u5207\u813e\u624b\u672f",
                "term_id": "mh_term_cd_15",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "zh_cn": "\u5176\u5b83\u624b\u672f",
                "term_id": "mh_term_cd_992",
                "item_type": "checkbox",
                "check_status": "false",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_2"
                    }
                ],
                "other_key": "mh_term_other"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u65e0\u65e2\u5f80\u624b\u672f\u53f2",
                "term_id": "mh_term_cd_16",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u77e5",
                "term_id": "mh_term_cd_003",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u9752\u9709\u7d20\u7c7b",
                "term_id": "mh_term_cd_17",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_4"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u5934\u5b62\u7c7b",
                "term_id": "mh_term_cd_18",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_4"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u78fa\u80fa\u7c7b",
                "term_id": "mh_term_cd_19",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_4"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u89e3\u70ed\u9547\u75db\u7c7b\uff08\u963f\u53f8\u5339\u6797\u7b49\uff09",
                "term_id": "mh_term_cd_20",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_4"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u9547\u9759\u7c7b\uff08\u82ef\u5df4\u6bd4\u59a5\u7b49\uff09",
                "term_id": "mh_term_cd_21",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_4"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u8840\u6e05\u5236\u5242",
                "term_id": "mh_term_cd_22",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_4"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u4e2d\u8349\u836f",
                "term_id": "mh_term_cd_23",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_4"
                    }
                ],
                "check_status": "false"
            },
            {
                "zh_cn": "\u5176\u5b83\u836f\u7269\u8fc7\u654f",
                "term_id": "mh_term_cd_994",
                "item_type": "checkbox",
                "check_status": "false",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_4"
                    }
                ],
                "other_key": "mh_term_other"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u65e0\u836f\u7269\u8fc7\u654f\u53f2",
                "term_id": "mh_term_cd_24",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_4"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u77e5",
                "term_id": "mh_term_cd_005",
                "show": [
                    {
                        "mh_sub_category_cd": "mh_sub_category_cd_4"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u8180\u80f1\u764c",
                "term_id": "mh_term_cd_25",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6025\u6027\u9ad3\u7cfb\u767d\u8840\u75c5\uff08AML\uff09",
                "term_id": "mh_term_cd_69",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6162\u6027\u9ad3\u6027\u767d\u8840\u75c5 (CML)",
                "term_id": "mh_term_cd_62",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6162\u6027\u6dcb\u5df4\u7ec6\u80de\u767d\u8840\u75c5 (CLL)",
                "term_id": "mh_term_cd_61",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u5c0f\u6dcb\u5df4\u7ec6\u80de\u6dcb\u5df4\u7624 \uff08SLL\uff09",
                "term_id": "mh_term_cd_70",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6162\u6027\u7c92\u5355\u6838\u7ec6\u80de\u767d\u8840\u75c5 \uff08CMML\uff09",
                "term_id": "mh_term_cd_63",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u9aa8\u9ad3\u589e\u6b96\u6027\u80bf\u7624 \uff08MPN\uff09",
                "term_id": "mh_term_cd_64",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u9aa8\u9ad3\u589e\u751f\u5f02\u5e38\u7efc\u5408\u5f81\uff08MDS\uff09",
                "term_id": "mh_term_cd_65",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u5176\u4ed6\u8840\u6db2\u764c",
                "term_id": "mh_term_cd_66",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u8111\u548c\u810a\u9ad3\u764c",
                "term_id": "mh_term_cd_26",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u4e73\u817a\u764c",
                "term_id": "mh_term_cd_27",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u4e73\u817a\u539f\u4f4d\u764c",
                "term_id": "mh_term_cd_28",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u7ed3\u76f4\u80a0\u764c",
                "term_id": "mh_term_cd_31",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u80be\u764c",
                "term_id": "mh_term_cd_32",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u80ba\u764c",
                "term_id": "mh_term_cd_33",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u80f0\u817a\u764c",
                "term_id": "mh_term_cd_35",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u76ae\u80a4\u9ed1\u8272\u7d20\u7624",
                "term_id": "mh_term_cd_37",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u76ae\u80a4\u57fa\u5e95\u7ec6\u80de\u764c\u6216\u76ae\u80a4\u5c40\u90e8\u9cde\u72b6\u7ec6\u80de\u764c",
                "term_id": "mh_term_cd_38",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u7532\u72b6\u817a\u764c",
                "term_id": "mh_term_cd_40",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u5375\u5de2\u764c",
                "term_id": "mh_term_cd_34",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u5b50\u5bab\u764c",
                "term_id": "mh_term_cd_41",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u5b50\u5bab\u9888\u764c",
                "term_id": "mh_term_cd_29",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u5b50\u5bab\u9888\u539f\u4f4d\u764c",
                "term_id": "mh_term_cd_30",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u524d\u5217\u817a\u764c",
                "term_id": "mh_term_cd_36",
                "show": [
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u777e\u4e38\u764c",
                "term_id": "mh_term_cd_39",
                "show": [
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "zh_cn": "\u5176\u5b83\u6076\u6027\u80bf\u7624",
                "term_id": "mh_term_cd_993",
                "item_type": "checkbox",
                "check_status": "false",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "other_key": "mh_term_other"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u65e0\u65e2\u5f80\u6076\u6027\u80bf\u7624\u53f2",
                "term_id": "mh_term_cd_42",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u77e5",
                "term_id": "mh_term_cd_004",
                "show": [
                    {
                        "gender_cd": "gender_cd_2",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    },
                    {
                        "gender_cd": "gender_cd_1",
                        "mh_sub_category_cd": "mh_sub_category_cd_3"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u5316\u7597",
                "term_id": "mh_term_cd_43",
                "show": [
                    {
                        "mh_category_cd": "mh_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u514d\u75ab\u6cbb\u7597\uff08ATG\u7b49\uff09",
                "term_id": "mh_term_cd_52",
                "show": [
                    {
                        "mh_category_cd": "mh_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u653e\u7597",
                "term_id": "mh_term_cd_45",
                "show": [
                    {
                        "mh_category_cd": "mh_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u9776\u5411\u6cbb\u7597\uff08TKI\u3001BTK\u6291\u5236\u5242\u3001BCL-2\u6291\u5236\u5242\u7b49\uff09",
                "term_id": "mh_term_cd_67",
                "show": [
                    {
                        "mh_category_cd": "mh_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "CAR-T",
                "term_id": "mh_term_cd_46",
                "show": [
                    {
                        "mh_category_cd": "mh_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u79fb\u690d",
                "term_id": "mh_term_cd_68",
                "show": [
                    {
                        "mh_category_cd": "mh_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u65e0",
                "term_id": "mh_term_cd_48",
                "show": [
                    {
                        "mh_category_cd": "mh_category_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u77e5",
                "term_id": "mh_term_cd_001",
                "show": [
                    {
                        "mh_category_cd": "mh_category_cd_1"
                    }
                ],
                "check_status": "false"
            }
        ],
        "show": [
            {
                "mh_category_cd": "mh_category_cd_1",
            },
            {
                "mh_sub_category_cd": "mh_sub_category_cd_1",
            },
            {
                "mh_sub_category_cd": "mh_sub_category_cd_2",
            },
            {
                "mh_sub_category_cd": "mh_sub_category_cd_3",
            },
            {
                "mh_sub_category_cd": "mh_sub_category_cd_4",
            }
        ],
        "column_key": "mh_term_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u65e2\u5f80\u53f2\u9879\u76ee\u540d\u79f0"
    },
    "plant_act_plt_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u662f",
                "term_id": "plant_act_plt_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5426",
                "term_id": "plant_act_plt_cd_0",
                "check_status": "false"
            }
        ],
        "column_key": "plant_act_plt_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u690d\u6d3b\u8bc1\u636e - \u8840\u5c0f\u677f\u690d\u6d3b"
    },
    "anti_fungal_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u662f",
                "term_id": "anti_fungal_cd_1",
                "show": [
                    {
                        "fungal_inft_cd": "fungal_inft_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5426",
                "term_id": "anti_fungal_cd_0",
                "show": [
                    {
                        "fungal_inft_cd": "fungal_inft_cd_1"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "anti_fungal_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u6297\u771f\u83cc\u836f\u7269"
    },
    "pretrt_tox_type_cd": {
        "options": [
            {
                "item_type": "checkbox",
                "zh_cn": "\u5fc3\u810f\u6bd2\u6027",
                "term_id": "pretrt_tox_type_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u4e2d\u67a2\u795e\u7ecf\u7cfb\u7edf\u6bd2\u6027",
                "term_id": "pretrt_tox_type_cd_2",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u53e3\u8154\u708e",
                "term_id": "pretrt_tox_type_cd_3",
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "other_key": "pretrt_tox_type_other",
                "term_id": "pretrt_tox_type_cd_99",
                "zh_cn": "\u5176\u5b83",
                "check_status": "false"
            }
        ],
        "column_key": "pretrt_tox_type_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u9884\u5904\u7406\u6bd2\u6027"
    },
    "regimen_change_yn_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u5426",
                "term_id": "regimen_change_yn_cd_0",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u662f",
                "term_id": "regimen_change_yn_cd_1",
                "check_status": "false"
            }
        ],
        "column_key": "regimen_change_yn_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u5b9e\u9645\u6267\u884c\u65b9\u6848\u662f\u5426\u53d1\u751f\u53d8\u5316"
    },
    "response_result_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u5b8c\u5168\u7f13\u89e3 (CR)",
                "term_id": "response_result_cd_102",
                "show": [
                    {
                        "response_type_cd": "response_type_cd_ALL"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "CNS\u7f13\u89e3",
                "term_id": "response_result_cd_112",
                "show": [
                    {
                        "treatment_intent_cd": "treatment_intent_cd_3"
                    },
                    {
                        "response_type_cd": "response_type_cd_ALL"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "CNS\u590d\u53d1",
                "term_id": "response_result_cd_113",
                "show": [
                    {
                        "treatment_intent_cd": "treatment_intent_cd_3"
                    },
                    {
                        "response_type_cd": "response_type_cd_ALL"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5b8c\u5168\u7f13\u89e3",
                "term_id": "response_result_cd_114",
                "show": [
                    {
                        "response_type_cd": "response_type_cd_ALL"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": " \u8840\u7ec6\u80de\u8ba1\u6570\u672a\u5b8c\u5168\u6062\u590d (CRi)",
                "term_id": "response_result_cd_109",
                "show": [
                    {
                        "response_type_cd": "response_type_cd_ALL"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u75be\u75c5\u8fdb\u5c55(PD)",
                "term_id": "response_result_cd_000",
                "show": [
                    {
                        "response_type_cd": "response_type_cd_ALL"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u7f13\u89e3 (NR)",
                "term_id": "response_result_cd_00",
                "show": [
                    {
                        "treatment_intent_cd": "treatment_intent_cd_3"
                    },
                    {
                        "response_type_cd": "response_type_cd_ALL"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "response_result_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u7597\u6548\u8bc4\u4f30\u7ed3\u679c"
    },
    "prog_risk_cd": {},
    "mh_sub_category_cd_2": {},
    "ae_yn_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u6709",
                "term_id": "ae_yn_cd_2",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u65e0",
                "term_id": "ae_yn_cd_1",
                "check_status": "false"
            }
        ],
        "column_key": "ae_yn_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u4e0a\u6b21\u51fa\u9662\u540e\u5230\u6b64\u6b21\u4f4f\u9662\u671f\u95f4\u65e0\u4e0d\u826f\u4e8b\u4ef6\u53d1\u751f"
    },
    "pretreat_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u662f",
                "term_id": "pretreat_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5426",
                "term_id": "pretreat_cd_0",
                "check_status": "false"
            }
        ],
        "column_key": "pretreat_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u662f\u5426\u6709\u79fb\u690d\u524d\u9884\u5904\u7406"
    },
    "pretreat_intense_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u6e05\u9ad3\u6027",
                "term_id": "pretreat_intense_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u51cf\u5242\u91cf",
                "term_id": "pretreat_intense_cd_2",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u975e\u6e05\u9ad3",
                "term_id": "pretreat_intense_cd_3",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5fae\u79fb\u690d",
                "term_id": "pretreat_intense_cd_4",
                "check_status": "false"
            }
        ],
        "column_key": "pretreat_intense_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u9884\u5904\u7406\u5f3a\u5ea6"
    },
    "death_reason_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u6b7b\u4e8e\u4e3b\u8bca\u65ad\u75be\u75c5",
                "term_id": "death_reason_cd_1",
                "show": [
                    {
                        "death_flag_cd": "death_flag_cd_2"
                    }
                ],
                "check_status": "false"
            },
            {
                "zh_cn": "\u5176\u5b83",
                "term_id": "death_reason_cd_99",
                "item_type": "radio",
                "check_status": "false",
                "show": [
                    {
                        "death_flag_cd": "death_flag_cd_2"
                    }
                ],
                "other_key": "death_reason_other"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u77e5",
                "term_id": "death_reason_cd_00",
                "show": [
                    {
                        "death_flag_cd": "death_flag_cd_2"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "death_reason_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u6b7b\u4ea1\u539f\u56e0"
    },
    "fungal_inft_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u662f",
                "term_id": "fungal_inft_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5426",
                "term_id": "fungal_inft_cd_0",
                "check_status": "false"
            }
        ],
        "column_key": "fungal_inft_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u79fb\u690d\u524d\u771f\u83cc\u611f\u67d3"
    },
    "hsct_rjct_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u662f",
                "term_id": "hsct_rjct_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5426",
                "term_id": "hsct_rjct_cd_0",
                "check_status": "false"
            }
        ],
        "column_key": "hsct_rjct_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u6392\u65a5\u53cd\u5e94"
    },
    "rai_stage": {},
    "ae_ongoing_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u6709",
                "term_id": "ae_ongoing_cd_2",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u65e0",
                "term_id": "ae_ongoing_cd_1",
                "check_status": "false"
            }
        ],
        "column_key": "ae_ongoing_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u4e0d\u826f\u4e8b\u4ef6\u662f\u5426\u8fd8\u5728\u6301\u7eed"
    },
    "dli_trt_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u662f",
                "term_id": "dli_trt_cd_1",
                "show": [
                    {
                        "progress_event_cd": "progress_event_cd_1",
                        "progress_yn_cd": "progress_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5426",
                "term_id": "dli_trt_cd_0",
                "show": [
                    {
                        "progress_event_cd": "progress_event_cd_1",
                        "progress_yn_cd": "progress_yn_cd_1"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "dli_trt_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u590d\u53d1\u540e\u662f\u5426\u63a5\u53d7DLI\u6cbb\u7597"
    },
    "who_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "B\u6dcb\u5df4\u6bcd\u7ec6\u80de\u767d\u8840\u75c5/\u6dcb\u5df4\u7624",
                "term_id": "who_cd_12",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "T\u6dcb\u5df4\u6bcd\u7ec6\u80de\u767d\u8840\u75c5/\u6dcb\u5df4\u7624",
                "term_id": "who_cd_13",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u672a\u8bc4\u4f30",
                "term_id": "who_cd_00",
                "check_status": "false"
            }
        ],
        "column_key": "who_cd",
        "question_type": "list",
        "column_value": "",
        "title": "WHO\u5206\u7c7b"
    },
    "plant_act_neut_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u662f",
                "term_id": "plant_act_neut_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5426",
                "term_id": "plant_act_neut_cd_0",
                "check_status": "false"
            }
        ],
        "column_key": "plant_act_neut_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u690d\u6d3b\u8bc1\u636e - \u4e2d\u6027\u7c92\u7ec6\u80de\u690d\u6d3b"
    },
    "dli_trt_regimen_cd": {
        "options": [
            {
                "item_type": "checkbox",
                "zh_cn": "DLI only",
                "term_id": "dli_trt_regimen_cd_1",
                "show": [
                    {
                        "dli_trt_cd": "dli_trt_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "DLI+AZA",
                "term_id": "dli_trt_regimen_cd_2",
                "show": [
                    {
                        "dli_trt_cd": "dli_trt_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "DLI+AZA+Lenalidomide",
                "term_id": "dli_trt_regimen_cd_3",
                "show": [
                    {
                        "dli_trt_cd": "dli_trt_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "DLI+Decitabine",
                "term_id": "dli_trt_regimen_cd_4",
                "show": [
                    {
                        "dli_trt_cd": "dli_trt_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "DLI+DNR",
                "term_id": "dli_trt_regimen_cd_5",
                "show": [
                    {
                        "dli_trt_cd": "dli_trt_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "DLI+IDA",
                "term_id": "dli_trt_regimen_cd_6",
                "show": [
                    {
                        "dli_trt_cd": "dli_trt_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "DLI+Sorafenib",
                "term_id": "dli_trt_regimen_cd_7",
                "show": [
                    {
                        "dli_trt_cd": "dli_trt_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "DLI+\u5e72\u6270\u7d20",
                "term_id": "dli_trt_regimen_cd_8",
                "show": [
                    {
                        "dli_trt_cd": "dli_trt_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "GPBSCI",
                "term_id": "dli_trt_regimen_cd_9",
                "show": [
                    {
                        "dli_trt_cd": "dli_trt_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u4f53\u5916\u5904\u7406\u4f9b\u8005T\u7ec6\u80de",
                "term_id": "dli_trt_regimen_cd_10",
                "show": [
                    {
                        "dli_trt_cd": "dli_trt_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "zh_cn": "\u5176\u5b83",
                "term_id": "dli_trt_regimen_cd_99",
                "item_type": "checkbox",
                "check_status": "false",
                "show": [
                    {
                        "dli_trt_cd": "dli_trt_cd_1"
                    }
                ],
                "other_key": "dli_trt_regimen_other"
            }
        ],
        "column_key": "dli_trt_regimen_cd",
        "question_type": "list",
        "column_value": "",
        "title": "DLI\u6cbb\u7597\u65b9\u6848\u5217\u8868"
    },
    "complication_yn_cd": {
        "options": [
            {
                "item_type": "radio",
                "zh_cn": "\u662f",
                "term_id": "complication_yn_cd_1",
                "check_status": "false"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u5426",
                "term_id": "complication_yn_cd_0",
                "check_status": "false"
            }
        ],
        "column_key": "complication_yn_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u79fb\u690d\u540e\u662f\u5426\u51fa\u73b0\u5e76\u53d1\u75c7"
    },
    "chab_sub_cd_1": {},
    "who_cd_11": {},
    "who_cd_10": {},
    "interv_ip_yn": {
        "options": [
            {
                "zh_cn": "\u6709",
                "term_id": "interv_ip_yn_1",
                "item_type": "radio",
                "check_status": "false",
                "show": [
                    {
                        "ae_yn_cd": "ae_yn_cd_2"
                    }
                ],
                "other_key": "interv_ip"
            },
            {
                "item_type": "radio",
                "zh_cn": "\u65e0",
                "term_id": "interv_ip_yn_0",
                "show": [
                    {
                        "ae_yn_cd": "ae_yn_cd_2"
                    }
                ],
                "check_status": "false"
            }
        ],
        "column_key": "interv_ip_yn",
        "question_type": "list",
        "column_value": "",
        "title": "\u6709\u65e0\u4f4f\u9662\u4ecb\u5165\u63aa\u65bd"
    },
    "mh_sub_category_cd_1": {},
    "mh_category_cd_1": {},
    "mh_sub_category_cd_3": {},
    "mh_sub_category_cd_4": {},
    "chab_sub_cd_2": {},
    "anti_fungal_type_cd": {
        "options": [
            {
                "item_type": "checkbox",
                "zh_cn": "\u4e24\u6027\u9709\u7d20B",
                "term_id": "anti_fungal_type_cd_1",
                "show": [
                    {
                        "anti_fungal_cd": "anti_fungal_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u963f\u5c3c\u82ac\u51c0",
                "term_id": "anti_fungal_type_cd_2",
                "show": [
                    {
                        "anti_fungal_cd": "anti_fungal_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u5361\u6cca\u82ac\u51c0",
                "term_id": "anti_fungal_type_cd_3",
                "show": [
                    {
                        "anti_fungal_cd": "anti_fungal_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6c1f\u5eb7\u5511",
                "term_id": "anti_fungal_type_cd_4",
                "show": [
                    {
                        "anti_fungal_cd": "anti_fungal_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u827e\u6c99\u5eb7\u5511",
                "term_id": "anti_fungal_type_cd_5",
                "show": [
                    {
                        "anti_fungal_cd": "anti_fungal_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u7c73\u5361\u82ac\u51c0",
                "term_id": "anti_fungal_type_cd_6",
                "show": [
                    {
                        "anti_fungal_cd": "anti_fungal_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u6cca\u6c99\u5eb7\u5511",
                "term_id": "anti_fungal_type_cd_7",
                "show": [
                    {
                        "anti_fungal_cd": "anti_fungal_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u4f0f\u7acb\u5eb7\u5511",
                "term_id": "anti_fungal_type_cd_8",
                "show": [
                    {
                        "anti_fungal_cd": "anti_fungal_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "zh_cn": "\u5176\u5b83",
                "term_id": "anti_fungal_type_cd_99",
                "item_type": "checkbox",
                "check_status": "false",
                "show": [
                    {
                        "anti_fungal_cd": "anti_fungal_cd_1"
                    }
                ],
                "other_key": "anti_fungal_type_other"
            }
        ],
        "column_key": "anti_fungal_type_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u6297\u771f\u83cc\u836f\u7269\u79cd\u7c7b"
    },
    "regimen_change_reason_cd": {
        "options": [
            {
                "item_type": "checkbox",
                "zh_cn": "\u6309\u8ba1\u5212\u6539\u53d8\u6cbb\u7597\u65b9\u6848",
                "term_id": "regimen_change_reason_cd_1",
                "show": [
                    {
                        "regimen_change_yn_cd": "regimen_change_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u7597\u6548\u4e0d\u8db3",
                "term_id": "regimen_change_reason_cd_2",
                "show": [
                    {
                        "regimen_change_yn_cd": "regimen_change_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u4e0d\u826f\u53cd\u5e94",
                "term_id": "regimen_change_reason_cd_3",
                "show": [
                    {
                        "regimen_change_yn_cd": "regimen_change_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u60a3\u8005\u751f\u6d3b\u8d28\u91cf\u7684\u6076\u5316",
                "term_id": "regimen_change_reason_cd_4",
                "show": [
                    {
                        "regimen_change_yn_cd": "regimen_change_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u5171\u75c5\u75c7\u7684\u53d1\u5c55\u6216\u6076\u5316",
                "term_id": "regimen_change_reason_cd_5",
                "show": [
                    {
                        "regimen_change_yn_cd": "regimen_change_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u836f\u7269\u4e0e\u836f\u7269\u76f8\u4e92\u4f5c\u7528",
                "term_id": "regimen_change_reason_cd_6",
                "show": [
                    {
                        "regimen_change_yn_cd": "regimen_change_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u7f3a\u4e4f\u4f9d\u4ece\u6027",
                "term_id": "regimen_change_reason_cd_7",
                "show": [
                    {
                        "regimen_change_yn_cd": "regimen_change_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u60a3\u8005\u81ea\u4ed8\u8d1f\u62c5\u9ad8",
                "term_id": "regimen_change_reason_cd_8",
                "show": [
                    {
                        "regimen_change_yn_cd": "regimen_change_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "item_type": "checkbox",
                "zh_cn": "\u4e0d\u518d\u62a5\u9500\u6cbb\u7597\u8d39\u7528",
                "term_id": "regimen_change_reason_cd_9",
                "show": [
                    {
                        "regimen_change_yn_cd": "regimen_change_yn_cd_1"
                    }
                ],
                "check_status": "false"
            },
            {
                "zh_cn": "\u5176\u4ed6\u7531\u60a3\u8005\u53d1\u8d77\u7684\u539f\u56e0",
                "term_id": "regimen_change_reason_cd_11",
                "item_type": "checkbox",
                "check_status": "false",
                "show": [
                    {
                        "regimen_change_yn_cd": "regimen_change_yn_cd_1"
                    }
                ],
                "other_key": "regimen_change_reason_other_pat"
            },
            {
                "zh_cn": "\u5176\u4ed6\u7531\u533b\u751f\u53d1\u8d77\u7684\u539f\u56e0",
                "term_id": "regimen_change_reason_cd_10",
                "item_type": "checkbox",
                "check_status": "false",
                "show": [
                    {
                        "regimen_change_yn_cd": "regimen_change_yn_cd_1"
                    }
                ],
                "other_key": "regimen_change_reason_other_doc"
            }
        ],
        "column_key": "regimen_change_reason_cd",
        "question_type": "list",
        "column_value": "",
        "title": "\u5b9e\u9645\u65b9\u6848\u53d1\u751f\u53d8\u5316\u7684\u539f\u56e0\u5217\u8868"
    }
}
    };
  },
  created() {},
  watch: {},
  methods: {
    showMonitor(questionItem) {
      let match = true;
      if (!('show' in questionItem)) {
        return true;
      }
      for (let show_conditions of questionItem.show) {
        for (let key of Object.keys(show_conditions)) {
          if (!(key in this.questions) || !this.questions[key].column_value.includes(show_conditions[key])) {
            match = false;
          }
        }
        if (match) {
          return true;
        }
        match = true;
      }
      console.log(match)
      return false;
    },
  },
};
</script>
<style scoped>
</style>
