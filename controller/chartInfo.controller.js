const model = require('../model');

const chartOfAirportModele = model.chartOfAirport;
const informationOfAiracModel = model.informationOfAirac;

const getLinkOfChart = async (nameOfCharts) => {
  let lien;
  const informationOfAirac = (await informationOfAiracModel.getInfoOfChart(nameOfCharts))[0];
  if (!informationOfAirac) throw new Error("Cette carte n'existe pas");
  if (informationOfAirac.Countrie_code === 'FR') {
    if (informationOfAirac.Chart_type === 'IFR') {
      lien = `https://www.sia.aviation-civile.gouv.fr/dvd/eAIP_${informationOfAirac.Info1}/FRANCE/${informationOfAirac.Info2}/html/eAIP/Cartes/${informationOfAirac.ICAO_AIRPORT}/${informationOfAirac.Chart_name}.pdf`;
    }
    if (informationOfAirac.Chart_name === 'VFR') {
      lien = `https://www.sia.aviation-civile.gouv.fr/dvd/eAIP_${informationOfAirac.Info1}/Atlas-VAC/PDF_AIPparSSection/VAC/AD/${informationOfAirac.Chart_name}.pdf`;
    }
  }

  return encodeURI(lien);
};

exports.getListOfChartOfAirport = async (req, res) => {
  const { ICAO } = req.params;
  try {
    let listCarteAirport = await chartOfAirportModele.findAll({ where: { ICAO_AIRPORT: ICAO } });
    if (listCarteAirport.length === 0) throw new Error('Les cartes ne cet aéroport ne sont disponible');

    listCarteAirport = await Promise.all(listCarteAirport
      .map((el) => JSON.parse(JSON.stringify(el)))
      .map((chart) => getLinkOfChart(chart.Chart_name).then((url) => ({ ...chart, url }))));

    return res.status(200).send({
      listCarteAerport: listCarteAirport,
    });
  } catch (erreur) {
    return res.status(400).send({
      message: erreur.message,
    });
  }
};
