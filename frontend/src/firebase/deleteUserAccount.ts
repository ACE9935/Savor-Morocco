import { getAuth, deleteUser, signOut } from "firebase/auth";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";

// Deletes Firestore doc first, then deletes Auth user and signs out
export async function deleteUserAccount(userId: string): Promise<void> {
    try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user || user.uid !== userId) {
            console.error("❌ No authenticated user or mismatched UID.");
            return;
        }

        // Delete Firestore user document first
        const db = getFirestore();
        const userDocRef = doc(db, "users", userId);

        await deleteDoc(userDocRef);
        console.log("✅ User document deleted from Firestore");

        // Then delete the user from Firebase Authentication
        await deleteUser(user);
        console.log("✅ User deleted from Firebase Authentication");

        // Optional: sign out (they’re already deleted)
        await signOut(auth);
        console.log("✅ User signed out");
    } catch (error: any) {
        console.error("❌ Error deleting user:", error.message || error);
    }
}
