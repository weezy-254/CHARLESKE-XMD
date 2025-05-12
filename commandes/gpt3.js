const { ezra } = require("../fredi/ezra");
const axios = require("axios");

ezra({ nomCom: "gpt3", reaction: "🌐", categorie: "IA" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;

    try {
        if (!arg || arg.length === 0) {
            return repondre("Veuillez poser une question.");
        }

        const question = arg.join(" ");

        const responseApi = await axios.get(`https://api.nexoracle.com/ai/chatgpt-3?apikey=33241c3a8402295fdc&prompt=${encodeURIComponent(question)}`);

        const resultat = responseApi.data;
        if (resultat && resultat.result) {
            repondre(resultat.result);
        } else {
            repondre("Erreur lors de la génération de la réponse.");
        }
    } catch (error) {
        console.error('Erreur:', error.message || 'Une erreur est survenue');
        repondre("Oups, une erreur est survenue lors du traitement de votre demande.");
    }
});
