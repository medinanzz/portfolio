import { useState } from "react";
import { FiX } from "react-icons/fi";
import { BtnClose, BtnSubmit, DivDadResult, DivInput, DivResult, Fieldset, SectionSchoolTest } from "./styles";

export function SchoolTestPage() {
    const [nameStudent, setNameStudent] = useState("");
    const [note1, setNote1] = useState("");
    const [note2, setNote2] = useState("");
    const [note3, setNote3] = useState("");
    const [classStudent, setClassStudent] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [cpfStudent, setCpfStudent] = useState("");
    const [rgStudent, setRgStudent] = useState("");

    const note1S = Math.min(note1, 10);
    const note2S = Math.min(note2, 10);
    const note3S = Math.min(note3, 10);

    const media = (note1S + note2S + note3S) / 3;
    const mediaFinal = Math.floor(media);
    const status = mediaFinal >= 6 ? "Aprovado" : "Reprovado";

    const DataSchool = {
        students: {
            name: nameStudent || 'Aluno não informado',
            class: {
                nameClass: classStudent || 'Classe não informada',
            },
            pessoal: {
                cpf: cpfStudent || 'CPF não informado',
                rg: rgStudent || 'RG não informado',
            }
        }
    }

    function newSubmit() {
        setNameStudent('');
        setNote1('');
        setNote2('');
        setNote3('');
        setClassStudent('');
        setCpfStudent('');
        setRgStudent('');
    }
    return (
        <>
            <SectionSchoolTest>
                <Fieldset>
                    <DivInput>
                        <label>Nome do aluno</label>
                        <input type="text" value={nameStudent} onChange={(e) => setNameStudent(e.target.value)}/>
                    </DivInput>
                    <DivInput>
                        <label>1° Tri.</label>
                        <input type="text" value={note1S} onChange={(e) => setNote1(e.target.value)}/>
                    </DivInput>
                    <DivInput>
                        <label>2° Tri.</label>
                        <input type="text" value={note2S} onChange={(e) => setNote2(e.target.value)}/>
                    </DivInput>
                    <DivInput>
                        <label>3° Tri.</label>
                        <input type="text" value={note3S} onChange={(e) => setNote3(e.target.value)}/>
                    </DivInput>
                    <DivInput>
                        <label>Truma</label>
                        <input type="text" value={classStudent} onChange={(e) => setClassStudent(e.target.value)}/>
                    </DivInput>
                    <DivInput>
                        <label>CPF (Apenas números)</label>
                        <input type="text" value={cpfStudent} onChange={(e) => setCpfStudent(e.target.value)}/>
                    </DivInput>
                    <DivInput>
                        <label>RG (Opcinal)</label>
                        <input type="text" value={rgStudent} onChange={(e) => setRgStudent(e.target.value)}/>
                    </DivInput>
                    <div>
                        <BtnSubmit onClick={() => {setSubmitted(true);}} disabled={!nameStudent || !note1 || !note2 || !note3 || !classStudent || !cpfStudent}>Enviar</BtnSubmit>
                    </div>
                    <DivDadResult className={submitted ? "show" : ""}>
                        <DivResult>
                            <BtnClose onClick={() => {setSubmitted(false); newSubmit();}}><FiX size={20}/></BtnClose>
                            <p>Nome: {DataSchool?.students?.name}</p>
                            <p>Classe: {DataSchool?.students?.class?.nameClass}</p>
                            <p>Status: {status}</p>
                        </DivResult>
                    </DivDadResult>
                </Fieldset>
            </SectionSchoolTest>
        </>
    )
}