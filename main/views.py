from django.shortcuts import render, redirect
from .models import Question, Developer, Choice

def index(request):
    developers = Developer.objects.all()
    
    context = {
        'developers' : developers,
        
    }
    
    return render(request, 'main/index.html', context=context)

def form(request):
    questions = Question.objects.all()
    
    context = {
        'questions' : questions,
        
    }
    
    return render(request, 'main/form.html', context=context)

def submit(request):
   #문항 수
    N = Question.objects.count()
    # 개발자 유형의 수
    K = Developer.objects.count()
    #print(f'문항 수 : {N}, 개발자 유형 수 : {K}')
    
    counter = [0] * (K+1)
    
    #print(f'POST : {request.POST}')
    for n in range(1, N+1):
        developer_id = int(request.POST[f'question-{n}'][0])
        counter[developer_id] += 1
        
    #최고점 개발 유형
    best_developer_id = max(range(1, K+1), key=lambda id : counter[id]) #최대값 
    # counter[best_developer_id]=0
    # best_developer_id2 = max(range(1, K+1), key=lambda id : counter[id]) #그다음최대값 
    # if counter[best_developer_id2] == 0:#0인데도 맥스가 됐으면 초기화 0으로 
    #     best_developer_id2 = 0
    # best_developer = Developer.objects.get(pk= best_developer_id*10 + best_developer_id2)전하 수정부분
    best_developer = Developer.objects.get(pk= best_developer_id)
    best_developer.count += 1
    best_developer.save()
    
    context = {
        'developer' : best_developer,
        'counter' : counter
    }
    return redirect('main:result', developer_id=best_developer_id)
    #return render(request, 'result.html', context)

def result(request, developer_id):
    developer = Developer.objects.get(pk=developer_id)
    context = {
        'developer' : developer,
    }
    return render(request, 'main/result.html', context)

def all_results(request):
    return render(request, 'main/all_results.html')