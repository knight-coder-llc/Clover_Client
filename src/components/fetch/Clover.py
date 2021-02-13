def get_session(request):
    api_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJvZmYiOmZhbHNlLCJpc3MiOm51bGwsInN1YiI6IkRlcyBQbGFpbmVzIE9mZmljZSBFcXVpcG1lbnQiLCJhdWQiOiI5NDQ3ZjRjMi0yNmQwLTRhNWYtYjBiZS0xNjZiNTM2ZmJiMDIiLCJpYXQiOjE0NzU2Nzk0OTksIm5iZiI6bnVsbCwiZXhwIjpudWxsfQ.bkbCljMwMO7IfEa5sC0GOFHC249Y82oFUjmKE07O4dmC8qdjD6mSWqTsd6c3evpSac06fJbWg_FOdgjAwlAvHA'
    user = 'tdcruz@footprintmps.com'
    password = 'Baseball2020'
    url = 'https://axess.axessmps.com/restapi/3.13.0/'
    # let user_name = 'tdcruz@footprintmps.com'

    session = request.Session()
    session.auth = (user, password)
    session.headers.update({'X-API-KEY': api_key, 'content-type': 'application/json', 'accept': 'application/json'})

    request.session['printfleet_url'] = url
    
    return session