import React from 'react';



const horarios = [
    {
        inicio: '08:00',
        fim: '12:00',
        dias: ['SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO']
    },
    {
        inicio: '13:30',
        fim: '17:30',
        dias: ['SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA']
    }
];

const diasDaSemana = ['DOMINGO', 'SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO'];

const HorarioFuncionamento = () => {
    const gerarHorarioFuncionamento = () => {
        return diasDaSemana.map(dia => {
            const horariosDia = horarios
                .filter(h => h.dias.includes(dia))
                .map(h => `${h.inicio} - ${h.fim}`);

            if (horariosDia.length === 0) {
                return <div key={dia}>{dia} | fechado</div>;
            } else {
                return <div key={dia}>{dia} | {horariosDia.join(' e ')}</div>;
            }
        });
    };

    return (
        <div>
            <h2>Horários de Funcionamento</h2>
            {gerarHorarioFuncionamento()}
        </div>
    );
};

export default HorarioFuncionamento;
