import React, {useState} from 'react';


const Form = () => {
    const [form, setForm] = useState({
        sto: "",
        detail: "",
        operationNumber: ""
    });

    function addNewPost(e) {
        e.preventDefault()

        const formData = new FormData();
        formData.append("nameSto", form.sto)
        formData.append("nameDetail", form.detail)
        formData.append("operationNumber", form.operationNumber)

        fetch("/admin/1.1", {
            method: 'POST',
            body: formData
        }).then(res => {
            console.log(res)
        })
    }

    return (
        <form onSubmit={addNewPost}>
            <pre>{JSON.stringify(form, null, 2)}</pre>

            <label>
                sto:
                <input type={"text"} value={form.sto} onChange={(event => setForm({...form, sto: event.target.value}))}/>
            </label>
            <br/>
            <label>
                detail:
                <input type={"text"} value={form.detail} onChange={(event => setForm({...form, detail: event.target.value}))}/>
            </label>
            <br/>
            <label>
                operationNumber:
                <input type={"text"} value={form.operationNumber} onChange={(event => setForm({...form, operationNumber: event.target.value}))}/>
            </label>
            <br/>
            <button type={"submit"}>Submit</button>
        </form>
    );
};

export default Form;