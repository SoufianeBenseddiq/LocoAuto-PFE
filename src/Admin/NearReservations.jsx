import axios from "axios";
import React, { useState, useEffect } from "react";
import { MdOutlineCheckCircle, MdEdit, MdCancel } from "react-icons/md";

const NearReservations = () => {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const response = await axios.get("http://localhost/locoauto/admin/reservationsList.php");
            setReservations(response.data);
            setLoading(false);
        } catch (error) {
            setError("Error fetching reservations");
            setLoading(false);
        }
    };

    const confirmReservation = async (id_reservation) => {
        try {
            await axios.post("http://localhost/locoauto/admin/confirmReservation.php", { id_reservation });
            fetchReservations(); // Reload reservations after confirmation
        } catch (error) {
            setError("Error confirming reservation");
        }
    };

    if (loading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center mt-4">{error}</div>;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Reservations</h1>
            <div className="grid grid-cols-1 gap-4">
                {reservations.map((reservation) => (
                    <div key={reservation.id_reservation} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-4 flex flex-col md:flex-row justify-between items-center">
                            <div className="md:flex-1">
                                <h3 className="text-xl font-bold mb-2">{reservation.libelle_voiture}</h3>
                                <p className="text-gray-600">
                                    <span className="font-semibold">Trajet:</span> {reservation.depart} - {reservation.arrive}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-semibold">Départ:</span> {formatDate(reservation.dateDebut)}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-semibold">Arrivée:</span> {formatDate(reservation.dateFin)}
                                </p>
                                <p className="text-gray-600"><span className="font-semibold">Nom:</span> {reservation.nom_Utilisateur}</p>
                                <p className="text-gray-600"><span className="font-semibold">Prénom:</span> {reservation.prenom_Utilisateur}</p>
                                <p className="text-gray-600"><span className="font-semibold">Téléphone:</span> {reservation.telephone_Utilisateur}</p>
                            </div>
                            <div className="md:flex-1 mt-4 md:mt-0 md:ml-4 flex flex-col space-y-2 items-center md:items-end">
                                <a href={"http://localhost/locoauto/"+reservation.cnie} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Voir CNIE</a>
                                <a href={"http://localhost/locoauto/"+reservation.NoPermis} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Voir Permis</a>
                                <div className="flex space-x-2 mt-4">
                                    <button onClick={() => confirmReservation(reservation.id_reservation)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center">
                                        <MdOutlineCheckCircle className="mr-2" /> Confirmer
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center">
                                        <MdCancel className="mr-2" /> Annuler
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NearReservations;
