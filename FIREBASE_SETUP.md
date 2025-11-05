# Konfiguracja Firebase Authentication

Aby umożliwić logowanie przez email/hasło i Google, musisz skonfigurować Firebase Authentication w Firebase Console.

## Krok 1: Otwórz Firebase Console

1. Przejdź do [Firebase Console](https://console.firebase.google.com/)
2. Wybierz projekt: **crystal-develop**

## Krok 2: Włącz Email/Password Authentication

1. W menu po lewej stronie kliknij **Authentication** (lub **Autoryzacja**)
2. Kliknij zakładkę **Sign-in method** (lub **Metody logowania**)
3. Znajdź **Email/Password** na liście
4. Kliknij **Email/Password**
5. **Włącz** opcję **Enable** (lub **Włącz**)
6. Opcjonalnie możesz włączyć **Email link (passwordless sign-in)** jeśli chcesz
7. Kliknij **Save** (Zapisz)

## Krok 3: Włącz Google Authentication

1. W tej samej zakładce **Sign-in method** znajdź **Google**
2. Kliknij **Google**
3. **Włącz** opcję **Enable** (lub **Włącz**)
4. Wypełnij pola:
   - **Project support email**: Twój email (np. admin@crystalgames.studio)
   - **Project public-facing name**: Crystal Games Studio
5. Kliknij **Save** (Zapisz)

## Krok 4: Skonfiguruj Authorized domains (dla Google)

1. W zakładce **Sign-in method**, przy opcji **Google**, kliknij **Settings** (lub **Ustawienia**)
2. W sekcji **Authorized domains** upewnij się, że są dodane:
   - `crystalgames.studio`
   - `crystalgamesstudio.github.io`
   - `localhost` (dla testów lokalnych)
3. Jeśli któregoś brakuje, kliknij **Add domain** i dodaj

## Krok 5: Sprawdź konfigurację Storage (dla zdjęć profilowych)

1. W menu po lewej kliknij **Storage** (lub **Magazyn**)
2. Jeśli Storage nie jest jeszcze włączony, kliknij **Get started**
3. Wybierz **Start in test mode** (możesz później zmienić na production mode)
4. Wybierz lokalizację (np. `us-central`)
5. Kliknij **Done**

### Ustaw reguły Storage (opcjonalne, ale zalecane)

1. W zakładce **Rules** (lub **Reguły**) w Storage, ustaw:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Profile photos - users can upload their own photos
    match /profile-photos/{userId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
      allow delete: if request.auth != null && request.auth.uid == userId;
    }
    
    // Default deny
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```

## Krok 6: Sprawdź konfigurację w kodzie

Upewnij się, że w pliku `src/config/firebase.ts` masz poprawne dane konfiguracyjne:

```typescript
const firebaseConfig = {
  apiKey: "AIzaSyCLMdUBjs2QdVg7Ge_pyZR6SHKpu7RKw-E",
  authDomain: "crystal-develop.firebaseapp.com",
  projectId: "crystal-develop",
  storageBucket: "crystal-develop.firebasestorage.app",
  // ... reszta konfiguracji
}
```

## Rozwiązywanie problemów

### Błąd: "auth/operation-not-allowed"
**Rozwiązanie**: Upewnij się, że w Firebase Console włączone są odpowiednie metody logowania (Email/Password i Google)

### Błąd: "auth/popup-blocked"
**Rozwiązanie**: 
- Zezwól na wyskakujące okna w przeglądarce
- Sprawdź, czy nie masz zainstalowanych blokad reklam, które mogą blokować popupy

### Błąd: "auth/network-request-failed"
**Rozwiązanie**: 
- Sprawdź połączenie internetowe
- Sprawdź, czy Firebase nie jest zablokowany przez firewall

### Google Sign-In nie działa
**Rozwiązanie**:
1. Sprawdź, czy domena jest dodana w Authorized domains
2. Sprawdź, czy Google Authentication jest włączone w Firebase Console
3. Sprawdź, czy w przeglądarce nie ma błędów w konsoli (F12)

### Email/Password nie działa
**Rozwiązanie**:
1. Sprawdź, czy Email/Password Authentication jest włączone w Firebase Console
2. Sprawdź, czy hasło ma co najmniej 6 znaków
3. Sprawdź, czy email jest poprawnie sformatowany

## Testowanie

Po skonfigurowaniu:

1. **Test Email/Password**:
   - Kliknij "Don't have an account? Sign up"
   - Wprowadź email i hasło (min. 6 znaków)
   - Kliknij "Sign Up"
   - Powinieneś otrzymać powiadomienie o sukcesie

2. **Test Google Sign-In**:
   - Kliknij "Sign in with Google"
   - Powinno otworzyć się okno Google
   - Wybierz konto Google
   - Zgódź się na uprawnienia
   - Powinieneś być zalogowany

## Dodatkowe informacje

- **Email verification**: Firebase automatycznie wysyła email weryfikacyjny przy rejestracji (możesz to włączyć w ustawieniach)
- **Password reset**: Możesz dodać funkcję resetowania hasła w przyszłości
- **Security**: Upewnij się, że reguły Firestore i Storage są odpowiednio skonfigurowane dla produkcji

