document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.getElementById('languageSelect');

    const translations = {
        en: {
            signInText: "Sign In",
            continueText: "to continue to Gmail",
            emailLabel: "Email or Phone",
            forgotEmailLink: "Forgot email?",
            guestModeText: "Not your computer? Use Guest mode to sign in privately.",
            learnMore: "Learn more",
            createAccountLink: "Create account",
            welcomeText: "Welcome",
            forgotPasswordLink: "Forgot password?",
            passwordLabel: "Enter your password",
            nextButton: "Next"
        },
        es: {
            signInText: "Iniciar sesión",
            continueText: "para continuar a Gmail",
            emailLabel: "Correo electrónico o teléfono",
            forgotEmailLink: "¿Olvidaste el correo electrónico?",
            guestModeText: "¿No es tu ordenador? Usa el modo de invitado para acceder de forma privada.",
            learnMore: "Más información",
            createAccountLink: "Crear cuenta",
            welcomeText: "Bienvenido",
            forgotPasswordLink: "¿Has olvidado tu contraseña?",
            passwordLabel: "Introduce tu contraseña",
            nextButton: "Siguiente"
        },
        fr: {
            signInText: "Se connecter",
            continueText: "pour continuer à Gmail",
            emailLabel: "E-mail ou téléphone",
            forgotEmailLink: "Adresse e-mail oubliée ?",
            guestModeText: "Pas votre ordinateur ? Utilisez le mode invité pour vous connecter en privé.",
            learnMore: "En savoir plus",
            createAccountLink: "Créer un compte",
            welcomeText: "Bienvenue",
            forgotPasswordLink: "Mot de passe oublié ?",
            passwordLabel: "Entrez votre mot de passe",
            nextButton: "Suivant"
        },
        de: {
            signInText: "Anmelden",
            continueText: "um fortzufahren zu Gmail",
            emailLabel: "E-Mail oder Telefon",
            forgotEmailLink: "E-Mail vergessen?",
            guestModeText: "Nicht Ihr Computer? Verwenden Sie den Gastmodus, um sich privat anzumelden.",
            learnMore: "Erfahren Sie mehr",
            createAccountLink: "Konto erstellen",
            welcomeText: "Willkommen",
            forgotPasswordLink: "Passwort vergessen?",
            passwordLabel: "Geben Sie Ihr Passwort ein",
            nextButton: "Weiter"
        },
        zh: {
            signInText: "登录",
            continueText: "继续访问 Gmail",
            emailLabel: "邮箱或手机号码",
            forgotEmailLink: "忘记邮箱？",
            guestModeText: "不是您的计算机？使用访客模式私人登录。",
            learnMore: "了解更多",
            createAccountLink: "创建帐户",
            welcomeText: "欢迎 (Huānyíng)",
            forgotPasswordLink: "忘记密码？",
            passwordLabel: "输入您的密码",
            nextButton: "下一步"
        },
        ja: {
            signInText: "ログイン",
            continueText: "Gmail を続行するには",
            emailLabel: "メールアドレスまたは電話番号",
            forgotEmailLink: "メールアドレスを忘れましたか？",
            guestModeText: "ご自身のコンピュータではないですか？ゲストモードを使用してプライベートにサインインします。",
            learnMore: "詳細",
            createAccountLink: "アカウント作成",
            welcomeText: "ようこそ (Yōkoso)",
            forgotPasswordLink: "パスワードをお忘れですか？",
            passwordLabel: "パスワードを入力してください",
            nextButton: "次へ"
        },
        hi: {
            signInText: "साइन इन करें",
            continueText: "Gmail पर जारी रखने के लिए",
            emailLabel: "ईमेल या फ़ोन",
            forgotEmailLink: "ईमेल भूल गए?",
            guestModeText: "यह आपका कंप्यूटर नहीं है? निजी रूप से साइन इन करने के लिए अतिथि मोड का उपयोग करें।",
            learnMore: "अतिथि मोड का उपयोग करने के बारे में अधिक जानें",
            createAccountLink: "खाता बनाएँ",
            welcomeText: "स्वागत है",
            forgotPasswordLink: "पासवर्ड भूल गए?",
            passwordLabel: "अपना पासवर्ड दर्ज करें",
            nextButton: "अगला"
        },
        'fr-CA': {
            signInText: "Se connecter",
            continueText: "pour continuer à Gmail",
            emailLabel: "Courriel ou téléphone",
            forgotEmailLink: "Courriel oublié?",
            guestModeText: "Pas votre ordinateur? Utilisez le mode invité pour vous connecter en privé.",
            learnMore: "En savoir plus",
            createAccountLink: "Créer un compte",
            welcomeText: "Bienvenue",
            forgotPasswordLink: "Mot de passe oublié ?",
            passwordLabel: "Entrez votre mot de passe",
            nextButton: "Suivant"
        },
        'de-AT': {
            signInText: "Anmelden",
            continueText: "um fortzufahren zu Gmail",
            emailLabel: "E-Mail oder Telefon",
            forgotEmailLink: "E-Mail vergessen?",
            guestModeText: "Nicht Ihr Computer? Verwenden Sie den Gastmodus, um sich privat anzumelden.",
            learnMore: "Mehr erfahren",
            createAccountLink: "Konto erstellen",
            welcomeText: "Willkommen",
            forgotPasswordLink: "Passwort vergessen?",
            passwordLabel: "Geben Sie Ihr Passwort ein",
            nextButton: "Weiter"
        },
        it: {
            signInText: "Accedi",
            continueText: "per continuare su Gmail",
            emailLabel: "Email o telefono",
            forgotEmailLink: "Hai dimenticato l'email?",
            guestModeText: "Non è il tuo computer? Usa la modalità ospite per accedere in modo privato.",
            learnMore: "Scopri di più",
            createAccountLink: "Crea account",
            welcomeText: "Benvenuto",
            forgotPasswordLink: "Hai dimenticato la password?",
            passwordLabel: "Inserisci la tua password",
            nextButton: "Avanti"
        },
        pt: {
            signInText: "Fazer login",
            continueText: "para continuar no Gmail",
            emailLabel: "Email ou telefone",
            forgotEmailLink: "Esqueceu o email?",
            guestModeText: "Este não é o seu computador? Use o modo visitante para fazer login de forma privada.",
            learnMore: "Saiba mais",
            createAccountLink: "Criar conta",
            welcomeText: "Bem-vindo",
            forgotPasswordLink: "Esqueceu sua senha?",
            passwordLabel: "Digite sua senha",
            nextButton: "Próximo"
        },
        ru: {
            signInText: "Войти",
            continueText: "чтобы продолжить работу с Gmail",
            emailLabel: "Электронная почта или телефон",
            forgotEmailLink: "Забыли адрес электронной почты?",
            guestModeText: "Это не ваш компьютер? Используйте гостевой режим для приватного входа.",
            learnMore: "Узнать больше",
            createAccountLink: "Создать аккаунт",
            welcomeText: "Добро пожаловать (Dobro pozhalovat')",
            forgotPasswordLink: "Забыли пароль?",
            passwordLabel: "Введите ваш пароль",
            nextButton: "Далее"
        }
    };
    

    languageSelect.addEventListener('change', function () {
        const selectedLanguage = this.value;
        const translation = translations[selectedLanguage];

        if (translation) {
            document.getElementById('signInText').innerText = translation.signInText;
            document.getElementById('continueText').innerText = translation.continueText;
            document.getElementById('emailLabel').innerText = translation.emailLabel;
            document.getElementById('forgotEmailLink').innerText = translation.forgotEmailLink;
            document.getElementById('guestModeText').innerText = translation.guestModeText;
            document.getElementById('learnMore').innerText = translation.learnMore;
            document.getElementById('createAccountLink').innerText = translation.createAccountLink;
            document.getElementById('forgotPasswordLink').innerText = translation.forgotPasswordLink;
            document.getElementById('passwordLabel').innerText = translation.passwordLabel;
            document.getElementById('welcomeText').innerText = translation.welcomeText;
            document.getElementById('nextButton').innerText = translation.nextButton;
        }
    });

    document.getElementById('showPassword').addEventListener('click', function () {
        var passwordField = document.getElementById("password");
        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    });

    // Query string से email को fetch करना
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    
    // Email को display करना
    if (email) {
        document.getElementById('displayEmail').textContent = email;
        document.querySelector('.email-container').setAttribute('aria-label', `${email} selected. Switch account`);
    }
});

window.onload = function() {
    // Check if credentials API is supported
    if ('credentials' in navigator) {
        navigator.credentials.get({
            password: true,
            mediation: 'required'
        }).then(function(credential) {
            if (credential) {
                // Display the email
                addEmailToList(credential.id);
            } else {
                // Fallback or message if no credentials are available
                addEmailToList('No saved accounts found');
            }
        }).catch(function(error) {
            console.error('Error fetching credentials:', error);
        });
    } else {
        console.log('Credentials API is not supported.');
        addEmailToList('Credentials API not supported on this browser');
    }
};

// Function to add email to the container
function addEmailToList(email) {
    const emailListContainer = document.getElementById('emailListContainer');

    const emailContainer = document.createElement('div');
    emailContainer.classList.add('email-container');
    emailContainer.tabIndex = 0;
    emailContainer.setAttribute('role', 'link');
    emailContainer.setAttribute('aria-label', `${email} selected. Switch account`);

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');

    const userIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    userIcon.setAttribute('class', 'user-icon');
    userIcon.setAttribute('fill', 'currentColor');
    userIcon.setAttribute('focusable', 'false');
    userIcon.setAttribute('width', '24px');
    userIcon.setAttribute('height', '24px');
    userIcon.setAttribute('viewBox', '0 0 24 24');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z');
    
    userIcon.appendChild(path);
    iconContainer.appendChild(userIcon);

    const emailText = document.createElement('div');
    emailText.classList.add('email-text');
    emailText.textContent = email;

    const dropdownIconContainer = document.createElement('div');
    dropdownIconContainer.classList.add('dropdown-icon-container');

    const dropdownIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    dropdownIcon.setAttribute('class', 'dropdown-icon');
    dropdownIcon.setAttribute('fill', 'currentColor');
    dropdownIcon.setAttribute('focusable', 'false');
    dropdownIcon.setAttribute('width', '24px');
    dropdownIcon.setAttribute('height', '24px');
    dropdownIcon.setAttribute('viewBox', '0 0 24 24');

    const dropdownPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    dropdownPath.setAttribute('d', 'M7 10l5 5 5-5z');
    
    dropdownIcon.appendChild(dropdownPath);
    dropdownIconContainer.appendChild(dropdownIcon);

    emailContainer.appendChild(iconContainer);
    emailContainer.appendChild(emailText);
    emailContainer.appendChild(dropdownIconContainer);

    emailListContainer.appendChild(emailContainer);
};

document.getElementById('createAccountLink').addEventListener('click', function(event) {
    event.preventDefault(); // link के default behavior को रोकना
    const dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});