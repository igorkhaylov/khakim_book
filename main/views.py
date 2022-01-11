from django.shortcuts import render, HttpResponseRedirect
from django.core.mail import send_mail


def index(request):
    return render(request, "index.html", )


def send_message(request):
    print('____' * 123)
    if request.method == "POST":
        name = request.POST['clientName']
        phone_number = request.POST['clientNum']
        email = request.POST['email']
        # card_number = request.POST['card_number']
        print(name, phone_number, email, sep='\n')
        message = f'Имя: {name}, \nНомер телефона: {phone_number},\nE-mail: {email},'
        mail = send_mail("Khakim Book",
                         message,
                         'libertycode01@gmail.com',
                         ['libertycode01@gmail.com', 'korolt073@gmail.com', ],
                         fail_silently=False,
                         )
        if mail:
            print("Сообщение успешно отправлено")
        else:
            print("Ошибка отправки сообщения")
    return HttpResponseRedirect('/')
