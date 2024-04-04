import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keluargas: [
                { id: 1, keluarga: 'Bapak' }
            ],
            newID: "",
            newkeluarga: ""
        }

        this.setId = this.setId.bind(this);
        this.setKeluarga = this.setKeluarga.bind(this);
        this.tambahData = this.tambahData.bind(this);
        this.renderTableData = this.renderTableData.bind(this);
    }

    setId(e) {
        this.setState({ newID: parseInt(e.target.value) }); // Mengonversi string menjadi angka
    }

    setKeluarga(e) {
        this.setState({ newKeluarga: e.target.value });
    }

    tambahData(e) {
        const { newID, newKeluarga } = this.state;
        const newkeluargaData = { id: newID, keluarga: newKeluarga };
        this.setState(prevState => ({
            keluargas: [...prevState.keluargas, newkeluargaData],
            newID: "",
            newkeluarga: ""
        }));
    }

    renderTableData() {
        return this.state.keluargas.map((keluargaData, index) => {
            const { id,keluarga } = keluargaData;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{keluarga}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="body">
                <h1>{this.props.judul}</h1>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>KELUARGA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>

                <div style={styles.container}>
                    ID: <input type="text" name="id" value={this.state.newID} onChange={this.setId} placeholder='HALOO'/>
                    &nbsp;&nbsp; 
                    KELUARGA: <input type="text" name="keluarga" value={this.state.newKeluarga} onChange={this.setKeluarga} />
                    &nbsp;
                    <button onClick={this.tambahData}>Tambah</button>
                </div>

                <div style={styles.container}>
                    Baru saja ditambahkan:
                    <br />ID: <span>{this.state.keluargas[this.state.keluargas.length - 1]?.id}</span>
                    <br />KELUARGA: <span>{this.state.keluargas[this.state.keluargas.length - 1]?.keluarga}</span>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        border: '2px solid black',
        padding: '15px',
        marginTop: '10px',
    }
}

export default Table;
