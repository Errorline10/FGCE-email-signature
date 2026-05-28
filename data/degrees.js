const inputValues = () => {
    return {
        "type": "select",
        "name": "degree",
        "label": "degree",
        "id": "degree",
        "optgroups": [
            {
                "label": "",
                "options": [
                    {"value": "","text": "None"}
                ]
            },
            {
                "label": "Specialist Degrees",
                "options": [
                    {"value": "Ed.S.","text": "Educational Specialist (Ed.S.)"},
                    {"value": "B.Acc.","text": "Bachelor of Accountancy (B.Acc.)"},
                ]
            },
            {
                "label": "Associate Degrees",
                "options": [
                    {"value": "A.A.","text": "Associate of Arts (A.A.)"},
                    {"value": "A.A.S.","text": "Associate of Applied Science (A.A.S.)"},
                    {"value": "A.A.T.","text": "Associate of Arts in Teaching (A.A.T.)"},
                    {"value": "A.B.S.","text": "Associate of Baccalaureate Studies (A.B.S.)"},
                    {"value": "A.E.S.","text": "Associate of Engineering Science (A.E.S.)"},
                    {"value": "A.F.A.","text": "Associate of Fine Arts (A.F.A.)"},
                    {"value": "A.G.S.","text": "Associate in General Studies (A.G.S.)"},
                    {"value": "A.S.","text": "Associate of Science (A.S.)"},
                ]
            },
            {
                "label": "Bachelor's Degrees",
                "options": [
                    {"value": "B.A.","text": "Bachelor of Arts (B.A.)"},
                    {"value": "B.B.A.","text": "Bachelor of Business Administration (B.B.A.)"},
                    {"value": "B.C.L.","text": "Bachelor of Civil Law (B.C.L.)"},
                    {"value": "B.Comm.","text": "Bachelor of Commerce (B.Comm.)"},
                    {"value": "B.E.","text": "Bachelor of Engineering (B.E.)"},
                    {"value": "B.F.A.","text": "Bachelor of Fine Arts (B.F.A.)"},
                    {"value": "L.L.B.","text": "Bachelor of Laws (L.L.B.)"},
                    {"value": "B.M.","text": "Bachelor of Music (B.M.)"},
                    {"value": "B.S.","text": "Bachelor of Science (B.S.)"}
                ]
            },
            {
                "label": "Master's Degrees",
                "options": [
                    {"value": "LL.M","text": "Master of Laws (LL.M.)"},
                    {"value": "M.A.","text": "Master of Arts (M.A.)"},
                    {"value": "M.B.A.","text": "Master of Business Administration (M.B.A.)"},
                    {"value": "M.Div.","text": "Master of Divinity (M.Div.)"},
                    {"value": "M.Ed.","text": "Master of Education (M.Ed.)"},
                    {"value": "M.F.A.","text": "Master of Fine Arts (M.F.A.)"},
                    {"value": "M.P.A.","text": "Master of Public Administration (M.P.A.)"},
                    {"value": "M.P.A.","text": "Master of Public Affairs (M.P.A.)"},
                    {"value": "M.P.M.","text": "Master of Project Management (M.P.M.)"},
                    {"value": "M.P.P.","text": "Master of Public Policy (M.P.P.)"},
                    {"value": "M.R.E.","text": "Master of Religious Education (M.R.E.)"},
                    {"value": "M.S.","text": "Master of Science (M.S.)"},
                    {"value": "M.T.S.","text": "Master of Theological Studies (M.T.S.)"}
                ]
            },
            {
                "label": "Doctoral Degrees",
                "options": [
                    {"value": "D.A.", "text": "Doctor of Arts (D.A.)"},
                    {"value": "D.B.A.", "text": "Doctor of Business Administration (D.B.A.)"},
                    {"value": "D.C.L.", "text": "Doctor of Civil Law (D.C.L.)"},
                    {"value": "D.D.", "text": "Doctor of Divinity (D.D.)"},
                    {"value": "D.Lit", "text": "Doctor of Literature or Doctor of Letters (D.Lit. or D. Litt.)"},
                    {"value": "D.M.A.", "text": "Doctor of Musical Arts (D.M.A.)"},
                    {"value": "D. Mus.", "text": "Doctor of Music (D. Mus.)"},
                    {"value": "D.N.S.", "text": "Doctorate of Nursing Science (D.N.S.)"},
                    {"value": "D. Phil.", "text": "Doctor of Philosophy (D. Phil.)"},
                    {"value": "D.Sc.", "text": "Doctor of Science (D.Sc.)"},
                    {"value": "Ed.D.", "text": "Doctor of Education (Ed.D.)"},
                    {"value": "Eng.D.", "text": "Doctor of Engineering (Eng.D.)"},
                    {"value": "J.D.", "text": "Doctor of Law or Juris Doctor (J.D.)"},
                    {"value": "Pharm.D.", "text": "Doctor of Pharmacy (Pharm.D.)"},
                    {"value": "Ph.D.", "text": "Doctor of Philosophy (Ph.D.)"},
                    {"value": "Psy.D.", "text": "Doctor of Psychology (Psy.D.)"},
                    {"value": "Th.D.", "text": "Doctor of Theology (Th.D.)"}
                ]
            },
            {
                "label": "Other",
                "options": [
                    {"value": "other","text": "Other"},
                ]
            },
        ]
    }
}

export default inputValues;








